import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10" id='footer'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Horizontal Links Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a href="#home" className="hover:text-white text-sm font-medium">HOME</a>
          <a href="#about" className="hover:text-white text-sm font-medium">ABOUT</a>
          <a href="#howToPlay" className="hover:text-white text-sm font-medium">HOW TO PLAY</a>
          <a href="#faq" className="hover:text-white text-sm font-medium">FAQ</a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Crickbuzz. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
