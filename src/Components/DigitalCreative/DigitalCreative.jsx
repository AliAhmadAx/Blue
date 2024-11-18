import patch from "../../assets/Images/Patch.svg";

function DigitalCreative() {
  return (
    <div className="w-full py-20 h-screen flex flex-col justify-center items-center">
      <span className="w-full flex justify-start pl-14 relative">
        <img src={patch} alt="" className="absolute -top-14 z-0 w-36 " />
      </span>

      <div className="w-10/12 z-40  relative h-[75%] border border-blue-300/30 backdrop-blur-md bg-white/30 p-10 text-center flex flex-col justify-center space-y-10 items-center">
        <h2 className="text-[30px] lg:text-[42px] uppercase">
          Imagining the digital creative
        </h2>
        <p className="text-sm lg:text-base w-[90%] lg:w-[65%]">
          Your journey with digital solutions begins with the right tools in
          hand. Providing services from website design, logo design and
          branding, to illustrations, digital art, graphic design and social
          media outlooks.
        </p>
      </div>
    </div>
  );
}

export default DigitalCreative;
