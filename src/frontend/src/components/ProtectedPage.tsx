import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useIdentityKit } from "@nfid/identitykit/react";
import { getUserId } from "../../../declarations/backend.js";


const ProtectedPage: React.FC = () => {
  const { user } = useIdentityKit();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8">
      <Link to="/" className="absolute top-6 left-6">
        <img
          src="/logo2.svg"
          alt="DFINITY logo"
          className="h-16 hover:scale-105 transition-transform"
        />
      </Link>
      <div className="text-center max-w-2xl w-full bg-white/10 backdrop-blur-lg p-12 rounded-xl shadow-xl border border-white/20">
        <h2 className="text-5xl font-bold text-white mb-8">
          Welcome to the Protected Page!
        </h2>
        <p className="text-2xl text-white/90 leading-relaxed mb-8">
          You are authenticated and can view this magical page.
        </p>
        <div className="text-left bg-white/5 p-6 rounded-lg">
          <p className="text-white/90 mb-4">
            <span className="font-semibold">Principal ID:</span>
            <br />
            <span className="font-mono text-sm">
              {user.principal.toString()}
            </span>
          </p>
          <p className="text-white/90">
            <span className="font-semibold">Account ID:</span>
            <br />
            <span className="font-mono text-sm">{getUserId(user.principal.toString())}</span>
          </p> 
        </div>
      </div>
    </div>
  );
};

export default ProtectedPage;
