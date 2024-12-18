import Buttons from "../Buttons/Buttons";

function Contact() {
  return (
    <div className="w-full pb-10 lg:pb-0 border-t lg:border-t-none border-gray-300/70">
      <div className="w-full flex flex-col lg:flex-row">
        {/* LHS  */}
        <div className="w-full lg:w-1/2 h-[60vh] flex flex-col justify-center items-center text-center lg:text-left text-black">
          <span className="w-2/3 flex flex-col justify-center leading-[65px]">
            <p className="text-xs font-bold">PURCHASE IN MIND ?</p>
            <h3 className="text-black/80 satoshi-light text-[50px]">
              Let&apos;s make your
            </h3>
            <h1 className="text-black/80 satoshi-light-italic text-[70px]">
              experience shine
            </h1>

            <p className="text-xs pt-6 leading-5 font-bold">
              Message us on WhatsApp to place your customized order:
              +9201234567, or write us an email and click on “send”.
            </p>
          </span>
        </div>

        {/* RHS  */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-left text-white/80">
          <span className="w-11/12 pr-2 lg:pr-0 lg:w-2/3 flex flex-col justify-center lg:flex-row lg:items-center space-x-2">
            <label
              htmlFor="Email"
              className="text-xs pb-1 pl-2 lg:pl-0 lg:pb-0 text-black font-bold whitespace-nowrap"
            >
              EMAIL ID:
            </label>
            <input
              type="email"
              className="p-1 w-full border border-blue-300/20 backdrop-blur-lg bg-black/10"
            />
          </span>

          <span className="w-11/12 pr-2 lg:pr-0 lg:w-2/3 flex flex-col justify-center lg:flex-row lg:items-center space-x-2 mt-5">
            <label
              htmlFor="area"
              className="text-xs pb-1 pl-2 lg:pl-0 lg:pb-0 text-black font-bold whitespace-nowrap"
            >
              Message:
            </label>
            <textarea
              className="p-1 w-full border border-blue-300/20 backdrop-blur-lg bg-black/10"
              name="message"
              id="message"
              cols="30"
              rows="6"
            ></textarea>
          </span>
          <span className="w-11/12 lg:w-2/3 mt-2 lg:mt-5 flex justify-end">
            <Buttons ButtonTitle="SEND" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
