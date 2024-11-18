import Card2 from "../Cards/Card2";
import { TestimonialText, TestimonialText2 } from "../../TextData";

function Testimonials() {
  return (
    <div className="w-full py-20 flex flex-col items-center text-black/80">
      <h2 className="text-[30px] lg:text-[48px] uppercase">Testimonials</h2>

      <div className="w-10/12 py-10 flex flex-col items-center lg:items-start lg:flex-row lg:justify-center z-0 lg:divide-x lg:divide-dashed lg:divide-gray-100/50">
        {/* LHS  */}
        <div className="lg:w-1/3 lg:space-y-5 relative">
          {TestimonialText?.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full flex justify-center lg:block lg:w-auto"
              >
                <Card2
                  title={item.title}
                  desc={item.desc}
                  auth={item.auth}
                  desig={item.desig}
                />
              </div>
            );
          })}
        </div>

        {/* RHS  */}
        <div className="lg:pl-[40px] lg:w-1/3 space-y-5">
          {TestimonialText2?.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full flex justify-center lg:block lg:w-auto"
              >
                <Card2
                  title={item.title}
                  desc={item.desc}
                  auth={item.auth}
                  desig={item.desig}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
