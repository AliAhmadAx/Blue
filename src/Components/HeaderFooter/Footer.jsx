import { useState } from "react";
import PrivacyPolicyModal from "../Modal/PrivacyPolicyModal";

// icons
import { BsArrowUp } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";

// images
import ALeft from "../../assets/Images/logo/ALeft.svg";
import white_logo from "../../assets/Images/logo/WhiteFullLogo.svg";
import ARight from "../../assets/Images/logo/ARight.svg";

// TEXTS
import { PrivacyText, PaymentText, TermsText } from "../../TextData";
import TermsConditions from "../Modal/TermsConditions";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  let navigate = useNavigate();

  const [showModal, setShowModal] = useState(0);
  const [showTermsModal, setShowTermsModal] = useState(false);

  return (
    <div className="footer-background-gradient footer-image w-full text-white bg-[#07092D]">
      <footer
        aria-label="Site Footer"
        className="footer-background-gradient w-full "
      >
        <div className="w-full">
          <div className="lg:px-24 py-14 place-items-center lg:place-items-start grid grid-cols-1 gap-5 lg:gap-10 lg:grid-cols-3">
            {/* WHOLE LOGO  */}
            <div className="flex h-full flex-col justify-center items-start relative ">
              <span className="flex ml-[42px] mb-2">
                <img src={ALeft} alt="" className="-mr-[12.5px] z-20" />
                <img src={white_logo} alt="" className="z-0" />
                <img src={ARight} alt="" className="-ml-[12.5px] z-20" />
              </span>
              <h1
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
                className="text-xl tracking-widest"
              >
                IMAN ANIYA
              </h1>
              <h1
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
                className="text-xs text-white/70 ml-1"
              >
                CREATIVE DESIGNING
              </h1>
            </div>

            <div className=" lg:ml-20 md:ml-0 sm:ml-0  grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
              <div className="text-center sm:text-left">
                <nav aria-label="Footer About Nav" className="mt-6">
                  <ul className="space-y-4 text-sm text-center">
                    <li>
                      <a
                        className="text-gray-300 cursor-pointer transition hover:text-gray-100/75 font-thin flex items-center justify-center lg:justify-start"
                        onClick={() =>
                          window.open(
                            "https://www.instagram.com/IA_CREATIVEDESIGNS"
                          )
                        }
                      >
                        <span className="border border-gray-500/50 rounded-full mr-5">
                          <AiOutlineInstagram className="m-[8px]" />
                        </span>
                        IA_CREATIVEDESIGNS
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-300 transition hover:text-gray-100/75 flex items-center justify-center lg:justify-start"
                        href="tel:+9233277844161"
                      >
                        <span className="border border-gray-500/50 rounded-full mr-5">
                          <BiPhone className="m-[8px]" />
                        </span>
                        +92 332 77844161
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-300 uppercase transition hover:text-gray-100/75 flex items-center justify-center lg:justify-start lg:text-left"
                        href="iacreativedesigns@iacreative-designs.com"
                      >
                        <span className="border border-gray-500/50 rounded-full mr-5">
                          <FiMail className="m-[8px]" />
                        </span>
                        iacreativedesigns@iacreative-designs.com
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="text-center sm:text-left">
                <nav aria-label="Footer About Nav" className="mt-6 lg:pl-10">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a
                        className="text-gray-300 cursor-pointer transition hover:text-gray-100/75 font-thin flex items-center justify-center lg:justify-start"
                        onClick={() => {
                          navigate("/");
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        HOME
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-300 cursor-pointer transition hover:text-gray-100/75 flex items-center justify-center lg:justify-start"
                        onClick={() => {
                          navigate("/#services");
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        SERVICES
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-300 cursor-pointer transition hover:text-gray-100/75 flex items-center justify-center lg:justify-start"
                        onClick={() => {
                          navigate("/about");
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        ABOUT
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-300 cursor-pointer transition hover:text-gray-100/75 flex items-center justify-center lg:justify-start"
                        onClick={() => {
                          navigate("/portfolio");
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        PORTFOLIO
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="text-center sm:text-left">
                <nav aria-label="Footer About Nav" className="mt-6">
                  <ul className="space-y-4 text-sm ">
                    <li>
                      <a
                        onClick={() => setShowModal(2)}
                        className="text-gray-300 cursor-pointer transition hover:text-gray-100/75 font-thin flex items-center justify-center lg:justify-start"
                      >
                        PAYMENT POLICY
                      </a>
                    </li>

                    <li>
                      <a
                        onClick={() => setShowModal(1)}
                        className="text-gray-300 cursor-pointer transition hover:text-gray-100/75 flex items-center justify-center lg:justify-start"
                      >
                        PRIVACY POLICY
                      </a>
                    </li>

                    {showModal === 1 || showModal === 2 ? (
                      <PrivacyPolicyModal
                        showModal={showModal}
                        setShowModal={setShowModal}
                        PrivacyText={PrivacyText}
                        PaymentText={PaymentText}
                      />
                    ) : null}

                    <li>
                      <a
                        onClick={() => setShowTermsModal(true)}
                        className="text-gray-300 cursor-pointer transition hover:text-gray-100/75 flex items-center justify-center lg:justify-start"
                      >
                        TERMS & CONDITIONS
                      </a>
                    </li>

                    {showTermsModal === true ? (
                      <TermsConditions
                        setShowTermsModal={setShowTermsModal}
                        TermsText={TermsText}
                      />
                    ) : null}
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div style={{ background: "var(--footer-bg-color)" }}>
            <div className="w-full flex justify-center lg:justify-between items-center lg:px-20 pb-5 lg:pb-14 ">
              <p className="text-white/80 text-[8px] lg:text-[12px]  text-center self-center mt-7">
                © 2022 All rights reserved by Iman Aniya. Designed by Maham
                Khalid.
              </p>

              <span
                onClick={ScrollToTop}
                className="hidden lg:flex items-center space-x-5 pr-20 cursor-pointer"
              >
                <p
                  style={{ fontFamily: "'Times New Roman', Times, serif" }}
                  className=" text-white/70 ml-1"
                >
                  TO TOP
                </p>

                <span className="border border-gray-500/50 rounded-full">
                  <BsArrowUp className="m-[12px]" />
                </span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
