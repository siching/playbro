import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Play", href:"https://wa.me/918764673892"},
  ];

  return (
    <a href='https://wa.me/918764673892' target="_blank"
        rel="noopener noreferrer">
    <nav className="bg-gray-900 w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Navbar content */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-28 h-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target= "_blank" 
                rel= "noopener noreferrer"
                className={`flex items-center gap-2 rounded-md transition-colors duration-200 ${
                  link.name === "Play"
                    ? "bg-[#25D366] text-white px-4 py-2 border border-green-600 shadow-sm hover:bg-[#1ebc59]"
                    : "text-white hover:text-green-400"
                }`}
              >
                {link.name === "Play" && <FaWhatsapp size={16}  />}
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-80 opacity-100 py-2" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="flex flex-col gap-3 px-4 bg-gray-800 rounded-md shadow-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors duration-200 rounded-md px-3 py-2 ${
                  link.name === "Play"
                    ? "bg-[#25D366] text-white border border-green-600 shadow-sm hover:bg-[#1ebc59] flex items-center gap-2"
                    : "text-white hover:text-green-400"
                }`}
              >
                {link.name === "Play" && <FaWhatsapp size={16} />}
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
    </a>
  );
};

export default Navbar;
