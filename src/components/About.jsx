import React from "react";

import { CiCloudOn } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaCrown } from "react-icons/fa6";

const InfoSection = () => {
  return (
    <a href='https://wa.me/918764673892' target="_blank"
        rel="noopener noreferrer">
    <div className="w-screen py-10 flex flex-col gap-8 mt-4" id="about">
      {/* ✅ 1st Component: Text Block */}
      <div className="bg-white shadow-xl rounded-xl px-6 md:p-10 text-left mx-auto w-screen">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          maximus tortor in lorem interdum, tempor fringilla nulla malesuada.
          Morbi pretium finibus dui, vitae egestas felis vehicula dapibus.
          Quisque vel neque sed ante vehicula suscipit. Aenean in magna tellus.
          Maecenas nec egestas est. Curabitur consectetur neque laoreet tortor
          scelerisque venenatis. Nullam nec rhoncus metus, at hendrerit quam.
          Sed quis molestie quam, et lacinia lectus. Proin erat mauris, ornare
          non dignissim in, sollicitudin vel libero. Phasellus volutpat euismod
          elit, id laoreet libero fermentum et...
        </p>

        {/* Numbered Points */}
        <ol className="list-decimal list-inside mt-8 text-left max-w-3xl mx-auto text-black font-bold text-lg space-y-2">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Vestibulum ante ipsum primis in faucibus orci luctus.</li>
          <li>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li>
            Integer malesuada nunc vel risus commodo viverra maecenas accumsan.
          </li>
          <li>Fusce id velit ut tortor pretium viverra suspendisse potenti.</li>
        </ol>
      </div>

      {/* ✅ 2nd Component: 4 Icons + Labels */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center w-full max-w-5xl mx-auto">
        <div className="flex flex-col items-center bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 m-6 p-2">
          <CiCloudOn className="text-white text-4xl md:text-5xl mb-2" />
          <span className="text-sm md:text-base text-white">1L+</span>
        </div>
        <div className="flex flex-col items-center bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 m-6 p-2">
          <FaRegHeart className="text-white text-4xl md:text-5xl mb-2" />
          <span className="text-sm md:text-base text-white">10,000+</span>
        </div>
        <div className="flex flex-col items-center bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 m-6 p-2">
          <CiStar className="text-white text-4xl md:text-5xl mb-2" />
          <span className="text-sm md:text-base text-white">50,000+</span>
        </div>
        <div className="flex flex-col items-center bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 m-6 p-2">
          <FaCrown className="text-white text-4xl md:text-5xl mb-2" />
          <span className="text-sm md:text-base text-white">20,000+</span>
        </div>
      </div>
    </div>
    </a>
  );
};

export default InfoSection;
