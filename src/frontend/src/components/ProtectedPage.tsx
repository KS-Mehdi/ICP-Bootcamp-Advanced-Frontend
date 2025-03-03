import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useIdentityKit } from "@nfid/identitykit/react";
import sharedService from "../../../declarations/sharedService.js";

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
    <div className="min-h-screen flex flex-col justify-center items-center p-4 sm:p-8">
      <Link to="/" className="absolute top-4 sm:top-6 left-4 sm:left-6">
        <img
          src="/logo2.svg"
          alt="DFINITY logo"
          className="h-12 sm:h-16 hover:scale-105 transition-transform"
        />
      </Link>
      <div className="text-center max-w-xl sm:max-w-2xl w-full bg-white/10 backdrop-blur-lg p-6 sm:p-12 rounded-xl shadow-xl border border-white/20">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 sm:mb-8">
          Welcome to the Protected Page!
        </h2>
        <p className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-6 sm:mb-8">
          You are authenticated and can view this magical page.
        </p>
        <div className="text-left bg-white/5 p-4 sm:p-6 rounded-lg">
          <p className="text-white/90 mb-4">
            <span className="font-semibold">Principal ID:</span>
            <br />
            <span className="font-mono text-xs sm:text-sm">
              {user.principal.toString()}
            </span>
          </p>
          <p className="text-white/90">
            <span className="font-semibold">Account ID:</span>
            <br />
            <span className="font-mono text-xs sm:text-sm">
              {sharedService.getUserId(user.principal.toString())}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProtectedPage;
