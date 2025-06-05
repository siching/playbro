import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const TwoColumnSection = () => {
  return (
    <a href='https://wa.me/918764673892' target="_blank"
        rel="noopener noreferrer">
    <div
      className="w-full px-4 py-10 md:py-16 bg-[radial-gradient(circle,_#EEAECA_0%,_#94BBE9_100%)] shadow-xl"
      id="howToPlay"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-5 border-b-2 md:border-b-0 md:border-r-2 border-gray-200 pr-0 md:pr-10 pb-6 md:pb-0">
          <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700">
            How to Play?
          </h2>
          <p className="text-gray-600 text-lg">
            We offer the best-in-class services including:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 text-base">
            <li>Reliable support for all your needs</li>
            <li>Scalable and secure architecture</li>
            <li>Fast performance and optimized UX</li>
            <li>Clean and maintainable code</li>
          </ol>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-col items-center md:items-end space-y-5 text-center md:text-right">
          <button className="flex items-center gap-3 bg-green-600 text-white text-lg font-medium px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300">
            <a
              href="https://wa.me/918764673892"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={22} /> Get Started on WhatsApp
            </a>
          </button>
          <p className="text-gray-600 text-base">
            Start your journey with us today!
          </p>
        </div>
      </div>
    </div>
    </a>
  );
};

export default TwoColumnSection;
