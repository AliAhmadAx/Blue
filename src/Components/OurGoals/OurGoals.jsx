import patch2 from "../../assets/Images/patch2.svg";

function OurGoals() {
  return (
    <>
      <div className="w-full relative py-20 lg:h-screen flex flex-col justify-center items-center text-white/80">
        <div className="w-10/12 z-10 h-full py-10 lg:py-0 lg:h-[85%] goals-image flex justify-center items-center">
          <div className="w-10/12 border border-blue-300/30 h-10/12 lg:h-2/3 backdrop-blur-md bg-[#203764]/10 p-5 lg:p-10 text-center flex flex-col justify-center items-center">
            <h2 className="lg:text-lg satoshi-medium tracking-widest font-semibold">
              Our Goals
            </h2>
            <h2 className="pt-5 leading-[25px] lg:pt-12 px-1 text-xs lg:text-[20px] text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates accusantium quaerat, perferendis dicta ea obcaecati.
              Mollitia beatae omnis quas. Est delectus asperiores ab
              necessitatibus dolorum, itaque amet repudiandae quas saepe
              perferendis, qui modi officia autem maxime vel quo? Impedit
              laudantium suscipit cum repellendus labore ipsam accusantium
              tenetur accusamus maxime beatae?
            </h2>
          </div>
        </div>
        <img src={patch2} alt="" className="absolute z-0 -bottom-12 right-12" />
      </div>

      <div className="w-full lg:pt-20 lg:h-screen flex flex-col justify-center items-center text-white">
        <div className="w-10/12 py-10 lg:py-0 lg:h-[90%] shadow-lg shadow-black aims-image flex justify-center items-center">
          <div className="w-10/12 h-10/12 lg:h-3/4 border border-blue-300/30 backdrop-blur-md bg-[#203764]/10 text-gray-300 rounded-sm text-center flex flex-col justify-center items-center p-5 lg:p-0 lg:px-14">
            <h2 className="lg:text-lg satoshi-medium tracking-widest font-semibold">
              Our Aim
            </h2>
            <h2 className="pt-5 lg:pt-12 leading-[25px] text-xs lg:text-[20px] text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              et veniam, delectus ex quidem obcaecati perspiciatis sit
              temporibus suscipit! Esse voluptatum explicabo ipsam eius nihil,
              itaque pariatur ab labore incidunt cumque voluptate quidem ut
              illo? Laudantium, quod tempora aut natus incidunt amet a sapiente
              commodi nobis exercitationem tempore consectetur neque repellendus
              id esse veritatis porro voluptatibus distinctio nostrum
              perferendis in?
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurGoals;
