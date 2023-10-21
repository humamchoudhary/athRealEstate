import React from "react";
import Contact from "./Contact";
function Footer() {
  return (
    <div
      className=" flex flex-col gap-10  bg-black rounded-xl w-full mb-5 px-10 py-20 mt-16 "
      id="contact"
    >
      <div className="px-4 flex flex-col gap-4 lg:flex-row justify-between">
        <div>
          <h1 className="text-white text-bold text-5xl">
            Ready To Work With Us?
          </h1>
          <p className="text-white text-medium text-md mt-4">
            Get ready to experince the top-notch customer service and let us
            guide you through your property journey
          </p>
        </div>
        <Contact />
      </div>

      <div className="h-[0.5px] opacity-50 w-full bg-white" />

      <div className="flex flex-col lg:flex-row gap-4 justify-between lg:items-center px-4">
        <div>
          <div className=" font-black text-4xl text-white">LOGO</div>
          <p className="text-md text-white lg:w-80">
            Cupidatat incididunt esse amet consequat amet et consectetur commodo
            velit laboris enim do. Nisi qui sint qui culpa pariatur.
          </p>
        </div>
        <div className="grid grid-cols-3 items-center gap-5">
          <div className="flex flex-col gap-2 text-white">
            <p className="font-bold">Home</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Properties</p>
          </div>
          <div className="flex flex-col gap-2 text-white">
            <p className="font-bold">Social</p>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
