import React from 'react';

const Banner = () => {
  return (
    <div className="w-[screen] border-2 border-black bg-gray-100" id="banner">
      <img
        src="/banner.png"
        alt="Banner"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Banner;
