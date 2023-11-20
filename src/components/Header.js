import React from "react";

const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-purple-400 to-indigo-500 bg-cover bg-center h-44 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold leading-tight mb-4">
            Discover Profiles
          </h1>
          <p className="text-lg font-semibold">Connect with Amazing People</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
