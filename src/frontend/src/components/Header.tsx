import React from "react";
import { ConnectWallet } from "@nfid/identitykit/react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="absolute top-2 sm:top-4 right-2 sm:right-4 flex items-center gap-4 sm:gap-6">
      <Link
        to="/protected"
        className="px-4 sm:px-6 py-2 sm:py-2.5 bg-white rounded-md shadow-lg hover:bg-gray-50 text-gray-700 font-medium text-md sm:text-lg transition-all duration-300"
      >
        Protected Page
      </Link>
      <ConnectWallet />
    </header>
  );
};

export default Header;
