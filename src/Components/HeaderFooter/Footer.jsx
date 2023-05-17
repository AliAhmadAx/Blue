import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="footer-background-gradient w-full text-white bg-black/80">
      <footer
        aria-label="Site Footer"
        className="footer-background-gradient w-full "
      >
        <div className="w-full">
          <div className="px-24 py-14 grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div>
              <div className="flex justify-center sm:justify-start">
                {/* <img
                  src="https://testlegion.onmedia.agency/wp-content/uploads/2022/08/logo-inv-s.png"
                  alt=""
                /> */}
                <h1 className="text-2xl font-bold">Frances Web App</h1>
              </div>

              <p
                className="mx-auto mt-6 max-w-md text-center leading-relaxed tracking-wider font-light sm:mx-0 sm:max-w-xs sm:text-left"
                style={{ fontFamily: "sans-serif", fontWeight: "lighter" }}
              >
                Få markant bedre resultater med jævnlig brugertestning. Det er
                enkelt og effektivt.
              </p>

              <span className="w-full mt-10 flex justify-center md:justify-start space-x-5 text-white text-2xl">
                <FaFacebookF />
                <AiFillInstagram className="text-3xl" />
                <FaTwitter />
              </span>
            </div>

            <div className=" lg:ml-20 md:ml-0 sm:ml-0  grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
              <div className="text-center sm:text-left">
                <p className="text-[20px] font-semibold leading-[48px] tracking-wider">
                  For virksomheder
                </p>

                <nav aria-label="Footer About Nav" className="mt-6">
                  <ul className="space-y-4 text-sm ">
                    <li>
                      <a
                        className="text-gray-100 transition hover:text-gray-100/75 font-thin"
                        href="/"
                      >
                        Kontakt
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-100 transition hover:text-gray-100/75"
                        href="/"
                      >
                        Priser
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-100 transition hover:text-gray-100/75"
                        href="/"
                      >
                        Om os
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-[20px] font-semibold leading-[48px] tracking-wider">
                  For testere
                </p>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-[20px] font-semibold leading-[48px] tracking-wider">
                  Tag kontakt
                </p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start"
                      href="/"
                    >
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 shrink-0 text-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg> */}

                      <span className="text-gray-100">
                        kontakt@testlegion.dk
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start"
                      href="/"
                    >
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 shrink-0 text-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg> */}

                      <span className="text-gray-100">+45 2173 5334</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-100 transition hover:text-gray-100/75"
                      href="/"
                    >
                      Privatlivspolitik
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-100 transition hover:text-gray-100/75"
                      href="/"
                    >
                      Affiliate
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-100 transition hover:text-gray-100/75"
                      href="/"
                    >
                      Bliv bruger tester
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ background: "var(--footer-bg-color)" }}>
            <div className="container m-auto py-5 px-5  ">
              <p className="text-white text-sm text-center ">
                &copy; {getCurrentYear()} All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
