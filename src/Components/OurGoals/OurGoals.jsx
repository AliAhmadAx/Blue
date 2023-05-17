import React from "react";

function OurGoals() {
  return (
    <>
      <div className="w-full pt-20 h-screen flex flex-col justify-center items-center text-white">
        <div className="w-10/12 h-[80%] goals-image flex justify-center items-center">
          <div className="w-10/12 h-2/3 backdrop-blur-md bg-white/10 p-10 text-center flex flex-col justify-center items-center">
            <h2
              style={{ fontFamily: "Satoshi-Regular" }}
              className="text-sm font-semibold"
            >
              Our Goals
            </h2>
            <h2 className=" pt-10 text-gray-300">
              At Iman Aniya, our goal is to provide you with the best digital
              solutions to help your business succeed. Whether you need a new
              website, social media management, or search engine optimization,
              our team of experts is here to help. We understand the importance
              of having a strong online presence in today’s digital age, and we
              are dedicated to helping you achieve your goals. With our range of
              services and our commitment to excellence, we are confident that
              we can help you take your business to the next level. Contact us
              today to learn more about how we can help you succeed in the
              digital world.
            </h2>
          </div>
        </div>
      </div>

      <div className="w-full pt-20 h-screen flex flex-col justify-center items-center text-white">
        <div className="w-10/12 h-[80%] aims-image flex justify-center items-center">
          <div className="w-10/12 h-2/3 backdrop-blur-md bg-white/10 p-10 text-center flex flex-col justify-center items-center">
            <h2
              style={{ fontFamily: "Satoshi-Regular" }}
              className="text-sm font-semibold"
            >
              Our Aim
            </h2>
            <h2 className=" pt-10 text-gray-300">
              We Aim To Take Your Company To the Next Level. Achieve your
              business objectives with tailored solutions using modern
              technology and deep research. We always prefer devising custom
              business solutions using modern technology, whether it’s SEO for
              any kind of website, content writing for blog and social media
              posts, or graphic designing, logos, posters and more.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurGoals;
