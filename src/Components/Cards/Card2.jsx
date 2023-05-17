import React from "react";
import { AiOutlineStar } from "react-icons/ai";

function Card2(props) {
  return (
    <div className="w-11/12 p-5 bg-white/10 space-y-5 text-gray-300 rounded-sm border border-white/20">
      <h1 className="text-lg">{props.title}</h1>

      <h2>{props.desc}</h2>

      <div className="flex space-x-3">
        <div className="w-fit h-fit flex justify-center items-center self-center rounded-full border border-white/20">
          <AiOutlineStar className="m-1 text-xs" />
        </div>

        <span className="flex flex-col">
          <p>{props.auth}</p>
          <p>{props.desig}</p>
        </span>
      </div>
    </div>
  );
}

export default Card2;
