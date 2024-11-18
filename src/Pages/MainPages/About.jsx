import { useContext, useEffect } from "react";
import { ThemeContext } from "../../App";
import HeadingTags from "../../Components/HeadingTags/HeadingTags";
import patch2 from "../../assets/Images/patch2.svg";
import OurGoals from "../../Components/OurGoals/OurGoals";

function About() {
  const { setHeaderShow } = useContext(ThemeContext);

  useEffect(() => {
    setHeaderShow(true);
  }, []);

  return (
    <div className="w-full flex flex-col items-center pt-20 text-[#E6E6E6]">
      <div className="w-full z-10 relative flex justify-center py-10">
        <img src={patch2} alt="" className="absolute top-[38%] z-0 w-16 h-16" />
        <HeadingTags Tag={"ABOUT US"} />
      </div>

      <div className="w-[75%] lg:w-[65%] z-30 about-image h-[70vh] flex justify-center items-center">
        <div className="w-10/12 lg:w-2/3 lg:h-[60%] border border-blue-300/30 text-[35px] lg:text-[60px] backdrop-blur-md bg-transparent p-10 text-center flex flex-col justify-center items-center">
          <h2 className="">You imagine it</h2>
          <h2 className="">We deliver it</h2>
        </div>
      </div>

      <section>
        <OurGoals />
      </section>
    </div>
  );
}

export default About;
