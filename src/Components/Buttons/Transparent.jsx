import React from "react";

function Transparent({ onClick, ButtonTitle, type }) {
  return (
    <button
      style={{ fontFamily: "Satoshi-Regular" }}
      className={
        "text-sm md:mt-0 w-fit md:w-fit hover:underline text-white md:block"
      }
      onClick={onClick}
      type={type}
    >
      {ButtonTitle}
    </button>
  );
}

export default Transparent;
