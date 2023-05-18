import React from "react";
import FloatingNameTag from "../FloatingNameTag/FloatingNameTag";
import Buttons from "../Buttons/Buttons";

function Contact() {
  return (
    <div className="w-full">
      <div className="w-full flex whitespace-nowrap space-x-5 p-4 border border-blue-300/20 backdrop-blur-lg bg-white/10 ">
        <FloatingNameTag />
      </div>

      <div className="w-full flex">
        {/* LHS  */}
        <div className="w-1/2 h-[60vh] flex flex-col justify-center items-center text-left text-white/70">
          <span className="w-2/3 flex flex-col justify-center leading-[70px]">
            <p className="text-xs">PROJECT IN MIND ?</p>
            <h3 className="text-white/80 satoshi-light text-[50px]">
              Let's make your
            </h3>
            <h1 className="text-white/80 satoshi-light-italic text-[80px]">
              design shine
            </h1>

            <p className="text-xs pt-6 leading-5">
              Message us on WhatsApp to place your customized order:
              0332-77844161, or write us an email and click on “send”.
            </p>
          </span>
        </div>

        {/* RHS  */}
        <div className="w-1/2 flex flex-col justify-center items-center text-left text-white/80">
          <span className="w-2/3 flex items-center space-x-2">
            <label
              htmlFor="Email"
              className="text-xs text-white whitespace-nowrap"
            >
              EMAIL ID:
            </label>
            <input
              type="email"
              className="p-1 w-full border border-blue-300/20 backdrop-blur-lg bg-white/10"
            />
          </span>

          <span className="w-2/3 flex space-x-2 mt-5">
            <label
              htmlFor="area"
              className="text-xs text-white whitespace-nowrap"
            >
              Message:
            </label>
            <textarea
              className="p-1 w-full border border-blue-300/20 backdrop-blur-lg bg-white/10"
              name="message"
              id="message"
              cols="30"
              rows="6"
            ></textarea>
          </span>
          <span className="w-2/3 mt-5 flex justify-end">
            <Buttons ButtonTitle="SEND" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
