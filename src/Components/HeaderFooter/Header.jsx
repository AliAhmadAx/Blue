import React, { useState } from "react";
import "../../App.css";
import { RiMenu4Fill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import Buttons from "../Buttons/Buttons";
import { MdClose } from "react-icons/md";

function Header() {
  const [Menu, setMenu] = useState(false);

  let navigate = useNavigate();

  return (
    <div
      style={{ fontFamily: "Satoshi-Regular" }}
      className={"w-full h-[100px] text-white flex justify-center -mb-32 z-50"}
    >
      <div className="w-[85%] h-full flex items-center justify-between py-1 pr-8">
        <span
          onClick={() => navigate("/")}
          className="self-center block lg:hidden cursor-pointer"
        >
          {/* <img
            src="https://testlegion.onmedia.agency/wp-content/uploads/2022/08/logo-inv-s.png"
            alt=""
          /> */}
          <h1 className="text-2xl hidden lg:block self-center">IMAN ANIYA</h1>
          <h1 className="text-2xl font-bold lg:hidden">F.W.A</h1>
        </span>

        <div className="space-x-2 text-sm hidden lg:flex justify-between w-10/12">
          <span
            onClick={() => navigate("/")}
            style={{
              color: "var(--bg-fill4)",
            }}
            className="self-center text-lg px-10 cursor-pointer"
          >
            {/* <img
              src="https://testlegion.onmedia.agency/wp-content/uploads/2022/08/logo-inv-s.png"
              alt="/"
            /> */}
            <h1 style={{ fontFamily: "Satoshi-Regular" }} className="text-2xl ">
              IMAN ANIYA
            </h1>
          </span>

          <span
            style={{ fontFamily: "Satoshi-Regular" }}
            className="space-x-8 "
          >
            <NavLink
              end
              style={({ isActive }) => ({
                borderBottom: isActive ? "1px solid white" : "",
                fontFamily: "Satoshi-Regular",
              })}
              className={
                " text-lg hover:border-b hover:border-white pb-3 px-0 mx-0 transition-colors duration-300"
              }
              to=""
            >
              Home
            </NavLink>

            <NavLink
              end
              style={({ isActive }) => ({
                borderBottom: isActive ? "1px solid white" : "",
                fontFamily: "Satoshi-Regular",
              })}
              className={
                " text-lg hover:border-b hover:border-white pb-3 px-0 mx-0 transition-colors duration-300"
              }
              to="/about"
            >
              About
            </NavLink>

            <NavLink
              end
              style={({ isActive }) => ({
                borderBottom: isActive ? "1px solid white" : "",
                fontFamily: "Satoshi-Regular",
              })}
              className={
                " text-lg hover:border-b hover:border-white pb-3 px-0 mx-0 transition-colors duration-300"
              }
              to="/services"
            >
              Services
            </NavLink>

            <NavLink
              end
              style={({ isActive }) => ({
                borderBottom: isActive ? "1px solid white" : "",
                fontFamily: "Satoshi-Regular",
              })}
              className={
                " text-lg hover:border-b hover:border-white pb-3 px-0 mx-0 transition-colors duration-300"
              }
              to="/contact"
            >
              Contact Us
            </NavLink>
          </span>

          <p></p>
        </div>

        <div className="flex justify-end space-x-5">
          {/* Mobile Menu  */}
          {Menu === true ? (
            <div
              onClick={() => setMenu(!Menu)}
              className={
                Menu === true
                  ? "fixed top-0 left-0 h-screen w-full max-h-screen overflow-hidden flex flex-col lg:hidden z-10"
                  : "absolute top-0 w-full max-h-0 overflow-hidden flex flex-col items-center bg-gray-900 lg:hidden"
              }
            >
              <div className="w-full bg-white absolute top-0 left-0 h-screen backdrop-blur-md bg-black/50 flex flex-col items-center justify-around pb-20">
                <div className="bg-white overflow-y-scroll absolute top-0 left-0 h-screen w-[100%] sm:w-[50%] flex flex-col items-start justify-around py-8 px-8">
                  {/* <span
                  onClick={() => navigate("/")}
                  className="self-center block lg:hidden sm:hidden cursor-pointer"
                >
                  <img
                    src="https://testlegion.onmedia.agency/wp-content/uploads/2022/08/logo-inv-s.png"
                    alt=""
                  />
                </span> */}
                  <span className="w-full text-left -mt-[50px]  ">
                    <MdClose
                      className="font-medium text-4xl"
                      onClick={() => setMenu(false)}
                    />
                  </span>

                  <div className="h-2/3 w-full -mt-10 flex flex-col justify-around">
                    <NavLink
                      end
                      style={({ isActive }) => ({
                        color: isActive
                          ? "var(--menu-color)"
                          : "var(--menu-color)",
                        // backgroundColor: isActive ? "var(--btn-bgColor2)" : "",
                      })}
                      className="w-full py-2 pl-5 text-3xl tracking-wider font-bold text-start transition-colors duration-300"
                      to="/"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      end
                      style={({ isActive }) => ({
                        color: isActive
                          ? "var(--menu-color)"
                          : "var(--menu-color)",
                        // backgroundColor: isActive ? "var(--btn-bgColor2)" : "",
                      })}
                      className="w-full py-2 pl-5 text-3xl tracking-wider font-bold text-start transition-colors duration-300"
                      to="/about"
                    >
                      About
                    </NavLink>

                    <NavLink
                      end
                      style={({ isActive }) => ({
                        color: isActive
                          ? "var(--menu-color)"
                          : "var(--menu-color)",
                        // backgroundColor: isActive ? "var(--btn-bgColor2)" : "",
                      })}
                      className="w-full py-2 pl-5 text-3xl tracking-wider font-bold text-start transition-colors duration-300"
                      to="/services"
                    >
                      Services
                    </NavLink>

                    <NavLink
                      end
                      style={({ isActive }) => ({
                        color: isActive
                          ? "var(--menu-color)"
                          : "var(--menu-color)",
                        // backgroundColor: isActive ? "var(--btn-bgColor2)" : "",
                      })}
                      className="w-full py-2 pl-5 text-3xl text-start  font-bold  transition-colors duration-300"
                      to="/contact"
                    >
                      Contact Us
                    </NavLink>
                  </div>
                  <span className="border-dotted text-black">{""}</span>
                  <div className="w-full pl-5">
                    <Buttons ButtonTitle={"Fa et tillbud"} />
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          <div
            onClick={() => setMenu(!Menu)}
            // className="px-3 py-3 flex lg:hidden items-center text-white text-sm"
            className="py-1 px-4 mt-5 flex rounded-[3px] md:mt-0 w-full md:w-fit bg-blue-800 text-white lg:hidden ml-8"
          >
            <span className="flex align-middle items-center justify-center">
              <RiMenu4Fill size="2em" />
            </span>
          </div>

          <Buttons
            ButtonTitle={"LET'S TALK"}
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
