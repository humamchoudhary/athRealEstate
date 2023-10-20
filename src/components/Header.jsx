import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between w-full flex-row items-center  mb-5">
      <div className=" font-black text-xl">LOGO</div>
      <div className="flex gap-6 flex-row items-center">
        <Link
          href={"#about"}
          className=" font-light text-sm lg:font-medium lg:text-lg cursor-pointer hover:underline underline-offset-8 duration-500"
        >
          About Us
        </Link>
        <Link
          href={"/catalog"}
          className=" font-light text-sm lg:font-medium lg:text-lg cursor-pointer hover:underline underline-offset-8 duration-150"
        >
          Property
        </Link>
        <Link
          href={"#contact"}
          className=" font-light text-sm lg:font-medium lg:text-lg cursor-pointer btn-cta text-white px-3 py-2"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Header;
