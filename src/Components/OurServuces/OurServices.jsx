import React from "react";
import Card1 from "../Cards/Card1";

function OurServices() {
  return (
    <div className="w-full flex flex-col items-center h-screen text-white">
      <h2 className="text-[48px] uppercase">Our Services</h2>

      <div className="w-10/12 py-10 grid grid-cols-3 place-items-center gap-y-8">
        <Card1 />
        <Card1 />
        <Card1 />

        <Card1 />
        <Card1 />
        <Card1 />
      </div>
    </div>
  );
}

export default OurServices;
