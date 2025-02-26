import React from "react";
import { ConnectWallet } from "@nfid/identitykit/react";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center p-8">
      <Link to="/" className="absolute top-6 left-6">
        <img src="/logo2.svg" alt="DFINITY logo" className="h-16 hover:scale-105 transition-transform" />
      </Link>
      <div className="text-center max-w-xl w-full bg-white/10 backdrop-blur-lg p-10 rounded-xl shadow-xl border border-white/20">
        <h2 className="text-4xl font-semibold text-white mb-8">Login</h2>
        <p className="text-xl text-white/90 mb-8">
          Please connect your wallet to continue
        </p>
        <div className="flex justify-center scale-110">
          <ConnectWallet />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
