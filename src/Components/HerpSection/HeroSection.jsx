import React from "react";

function HeroSection() {
  return (
    <div className="w-full pt-20 h-screen flex flex-col justify-center items-center text-white">
      <div className="w-10/12 h-[80%] hero-image flex justify-center items-center">
        <div className="w-1/2 h-1/2 backdrop-blur-md bg-white/10 p-10 text-center flex flex-col justify-center items-center">
          <h2 className="text-[52px]">Design, Digital Art</h2>
          <h2 className="text-[52px]">&</h2>
          <h2 className="text-[52px]">Creative services</h2>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
