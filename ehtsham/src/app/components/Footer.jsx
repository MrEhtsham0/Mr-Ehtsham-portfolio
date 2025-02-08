import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white py-6 mt-12 border-t-[#33353F]">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
        <span className="text-lg font-semibold mb-4 sm:mb-0">Mr-Ehtsham</span>
        <p className="text-sm text-gray-400 hover:text-white transition-all duration-300 cursor-pointer">
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
