import React from "react";
import logo1 from "../../assets/Images/logo1.svg";
import logo2 from "../../assets/Images/logo2.svg";
import logo3 from "../../assets/Images/logo3.svg";
import logo4 from "../../assets/Images/logo4.svg";
import logo4a from "../../assets/Images/logo4a.svg";
import logo5 from "../../assets/Images/logo5.svg";
import logo6 from "../../assets/Images/logo4.svg";
import logo6a from "../../assets/Images/logo6a.svg";
import logo7 from "../../assets/Images/logo7.svg";
import logo7a from "../../assets/Images/logo7a.svg";

function DigitalCreative() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-white">
      <div className="w-10/12 h-1/2 backdrop-blur-md bg-white/10 p-10 text-center flex flex-col justify-around items-center">
        <h2 className="text-[48px] uppercase">
          Imagining the digital creative
        </h2>
        <p className="w-2/3">
          Your journey with digital solutions begins with the right tools in
          hand. Providing services from website design, logo design and
          branding, to illustrations, digital art, graphic design and social
          media outlooks.
        </p>
      </div>

      <div className="w-11/12 h-1/2 grid grid-cols-7 place-items-center">
        <img
          style={{ boxShadow: "1px 1px 20px rgba(173, 216, 230, 0.4" }}
          className="w-16 h-16"
          src={logo2}
          alt=""
        />

        <img className="w-16 h-16 " src={logo3} alt="" />

        <span className="relative flex items-center justify-center">
          <img
            style={{ boxShadow: "1px 1px 14px 3px rgba(250, 107, 82, 0.5)" }}
            className="w-16 h-16 "
            src={logo4}
            alt=""
          />

          <img className="w-8 h-8 absolute" src={logo4a} alt="" />
        </span>

        <img className="w-20 h-20" src={logo1} alt="wordpress" />

        <img className="w-12 h-12" src={logo5} alt="figma" />

        <span className="relative flex items-center justify-center">
          <img
            style={{ boxShadow: "1px 1px 14px 3px rgba(250, 82, 236, 0.529)" }}
            className="w-16 h-16 shadow-lg shadow-pink-200/30"
            src={logo6}
            alt=""
          />

          <img className="w-10 h-10 absolute" src={logo6a} alt="" />
        </span>

        <span className="relative flex items-center justify-center">
          <img
            style={{ boxShadow: "1px 1px 14px 3px rgba(82, 110, 250, 0.529)" }}
            className="w-16 h-16 shadow-lg shadow-blue-200/30"
            src={logo7}
            alt=""
          />

          <img className="w-8 h-8 absolute" src={logo7a} alt="" />
        </span>
      </div>
    </div>
  );
}

export default DigitalCreative;
