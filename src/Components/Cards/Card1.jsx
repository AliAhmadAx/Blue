import React from "react";
import { RxArrowTopRight } from "react-icons/rx";
import Transparent from "../Buttons/Transparent";

function Card1() {
  return (
    <div className="w-11/12 p-5 bg-white/10 space-y-5 text-gray-300 rounded-sm border border-white/20">
      <p className="text-xs">01</p>

      <h1 className="text-lg">Web Design & UI/UX</h1>

      <h2>
        Visually stunning web and mobile app designs that captivate your
        audience by blending brand voice and customer needs
      </h2>

      <div className="flex space-x-3">
        <div className="w-fit rounded-full border border-white/20">
          <RxArrowTopRight className="m-1 text-xs" />
        </div>

        <Transparent ButtonTitle="VIEW IN PORTFOLIO" />
      </div>
    </div>
  );
}

export default Card1;
