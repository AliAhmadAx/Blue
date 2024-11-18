import { lazy, Suspense } from "react";
import HeadingTags from "../../Components/HeadingTags/HeadingTags";

const PortfolioCards = lazy(() =>
  import("../../Components/Cards/PortfolioCards")
);

import patch2 from "../../assets/Images/patch2.svg";

import { RxArrowTopRight } from "react-icons/rx";
import Transparent from "../../Components/Buttons/Transparent";
import { useNavigate } from "react-router-dom";

function PortfolioMain() {
  const PortfolioCardData = [
    {
      title: "Sports Cars",
      img1: "https://images.unsplash.com/photo-1573661687979-b1fe429b9da3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      img2: "https://images.unsplash.com/photo-1610809376778-928ee2c3a561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      img3: "https://images.unsplash.com/photo-1569192481814-941b1a1905b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },

    {
      title: "Classical Car",
      img1: "https://images.unsplash.com/photo-1587750059638-e7e8c43b99fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      img2: "https://images.unsplash.com/photo-1584345604325-f5091269a0d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      img3: "https://images.unsplash.com/photo-1489008777659-ad1fc8e07097?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Off-Road",
      img1: "https://images.unsplash.com/photo-1602038187784-41e649a79d38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      img2: "https://images.unsplash.com/photo-1627666259356-03a116b7dde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      img3: "https://images.unsplash.com/photo-1558403871-bb6e8113a32e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
    },
  ];

  let navigate = useNavigate();

  return (
    <>
      <div className="w-full z-10 relative flex justify-center py-10">
        <img
          src={patch2}
          alt=""
          className="absolute top-[38%] left-[35%] z-0 w-[70px] h-[70px]"
        />

        <img
          src={patch2}
          alt=""
          className="absolute top-[66%] right-[20%] z-0 w-[50px] h-[50px]"
        />
        <HeadingTags Tag={"PORTFOLIO"} />
      </div>

      <div className="w-[75%] lg:w-[65%] z-30 portfolio-image h-[70vh] flex justify-center items-center">
        <div className="w-10/12 lg:w-2/3 lg:h-[60%] border border-blue-300/30 text-[35px] lg:text-[50px] backdrop-blur-md bg-transparent p-10 text-center flex flex-col justify-center items-center">
          <h2 className="">See us bring our clients&apos;</h2>
          <h2 className="">Imagination to life</h2>
        </div>
      </div>

      <section className="w-full pt-20 pb-10 lg:py-20 flex flex-col items-center">
        <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 place-items-center">
          {PortfolioCardData?.map((item, index) => {
            return (
              <>
                <Suspense fallback={<div>Loading...</div>}>
                  <PortfolioCards
                    keyy={index}
                    title={item.title}
                    image1={item.img1}
                    image2={item.img2}
                    image3={item.img3}
                  />
                </Suspense>
              </>
            );
          })}
        </div>
      </section>

      <span className="w-full mb-20 lg:mb-10 flex justify-center space-x-3">
        <div className="w-fit rounded-full border border-white/20 -ml-3">
          <RxArrowTopRight className="m-1 text-sm" />
        </div>
        <Transparent
          onClick={() => {
            navigate("view-all");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          ButtonTitle={"VIEW ALL"}
        />
      </span>
    </>
  );
}

export default PortfolioMain;
