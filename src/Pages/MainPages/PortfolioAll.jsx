import React, { lazy, Suspense } from "react";
import HeadingTags from "../../Components/HeadingTags/HeadingTags";
const PortfolioCardsAll = lazy(() =>
  import("../../Components/Cards/PortfolioCardsAll")
);
import { RxArrowTopRight } from "react-icons/rx";
import Transparent from "../../Components/Buttons/Transparent";
import { useNavigate } from "react-router-dom";

// IMAGES
import patch2 from "../../assets/Images/patch2.svg";

function PortfolioAll() {
  const PortfolioCardData = [
    {
      title: "Sports Cars",
      img: [
        "https://images.unsplash.com/photo-1573661687979-b1fe429b9da3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1610809376778-928ee2c3a561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1569192481814-941b1a1905b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      ],
    },

    {
      title: "Classical Car",
      img: [
        "https://images.unsplash.com/photo-1587750059638-e7e8c43b99fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        "https://images.unsplash.com/photo-1584345604325-f5091269a0d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1489008777659-ad1fc8e07097?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      ],
    },
    {
      title: "Off-Road",
      img: [
        "https://images.unsplash.com/photo-1602038187784-41e649a79d38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1627666259356-03a116b7dde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1558403871-bb6e8113a32e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
      ],
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
          className="absolute -bottom-[65%] right-[49%] z-0 w-[55px] h-[55px]"
        />

        <img
          src={patch2}
          alt=""
          className="absolute bottom-[0%] right-[50%] z-0 w-[40px] h-[40px]"
        />
        <HeadingTags Tag={"ALL PORTFOLIO IMAGES"} />
      </div>

      <div className="w-full pl-[8%] text-black tracking-widest space-x-3 flex items-center">
        <p
          onClick={() => navigate("/rent")}
          className="text-[10px] satoshi-regular cursor-pointer hover:underline"
        >
          Rent a car
        </p>
        <p className="text-[10px] satoshi-regular">{">"}</p>
        <p className="text-[10px] satoshi-regular cursor-pointer">ALL cars</p>
      </div>

      <section className="w-full pt-20 pb-10 lg:pt-20 flex flex-col items-center">
        <div className="w-10/12 flex flex-col">
          {PortfolioCardData?.map((item, index) => {
            return (
              <div key={index}>
                <Suspense fallback={<div>Loading...</div>}>
                  <PortfolioCardsAll
                    keyy={index}
                    title={item.title}
                    image={item.img}
                  />
                </Suspense>
              </div>
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
            navigate("/rent");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          ButtonTitle={"BACK TO ALBUMS"}
        />
      </span>
    </>
  );
}

export default PortfolioAll;
