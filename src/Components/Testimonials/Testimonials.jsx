import React from "react";
import Card2 from "../Cards/Card2";
import { TestimonialText, TestimonialText2 } from "../../TextData";
import star from "../../assets/Images/icons/star.svg";

function Testimonials() {
  return (
    <div className="w-full flex flex-col items-center text-white">
      <h2 className="text-[48px] uppercase">Testimonials</h2>

      <div className="w-10/12 py-10 flex divide-x divide-dashed divide-gray-100/50">
        {/* LHS  */}
        <div className="w-1/2 space-y-5 relative">
          {TestimonialText?.map((item, index) => {
            return (
              <div key={index}>
                <Card2
                  title={item.title}
                  desc={item.desc}
                  auth={item.auth}
                  desig={item.desig}
                />
              </div>
            );
          })}

          <div className="absolute top-0 -right-3 space-y-20">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>

          <div className="flex text-sm space-x-5 absolute -bottom-2 right-20">
            <img src={star} alt="" className="mr-1" />
            What our clients said
          </div>

          <span className="absolute -bottom-2 right-0 text-gray-400 text-xs">
            ----------
          </span>
        </div>

        {/* RHS  */}
        <div className="pl-[50px] w-1/2 space-y-5">
          {TestimonialText2?.map((item, index) => {
            return (
              <div key={index}>
                <Card2
                  title={item.title}
                  desc={item.desc}
                  auth={item.auth}
                  desig={item.desig}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
