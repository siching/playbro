import React from 'react';

const Banner = () => {
  return (
    <div className="w-[screen] border-2 border-black bg-gray-100" id="banner">
      <a href='https://wa.me/918764673892' target="_blank"
        rel="noopener noreferrer">
        <img
          src="/banner.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </a>

    </div>
  );
};

export default Banner;
