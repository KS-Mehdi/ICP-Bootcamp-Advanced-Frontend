import React from "react";
import { ConnectWallet } from "@nfid/identitykit/react";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center p-4 sm:p-8">
      <Link to="/" className="absolute top-4 sm:top-6 left-4 sm:left-6">
        <img
          src="/logo2.svg"
          alt="DFINITY logo"
          className="h-12 sm:h-16 hover:scale-105 transition-transform"
        />
      </Link>
      <div className="text-center max-w-lg sm:max-w-xl w-full bg-white/10 backdrop-blur-lg p-6 sm:p-10 rounded-xl shadow-xl border border-white/20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6 sm:mb-8">
          Login
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8">
          Please connect your wallet to continue
        </p>
        <div className="flex justify-center scale-100 sm:scale-110">
          <ConnectWallet />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
