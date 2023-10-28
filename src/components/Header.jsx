import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between w-full flex-row items-center  mb-5">
      <Link href={"/"} className=" relative w-16 h-16 p-2 font-black text-xl">
        <Image
          src={"/logo.png"}
          alt="header"
          fill
          style={{ objectFit: "contain", zIndex: 1 }}
        />
      </Link>
      <div className="flex gap-6 flex-row items-center">
        <Link
          href={"#about"}
          className=" font-light text-sm lg:font-medium lg:text-lg overflow-hidden whitespace-nowrap cursor-pointer text- hover:underline underline-offset-8 duration-500"
        >
          About Us
        </Link>
        <Link
          href={"/catalog"}
          className=" font-light text-sm lg:font-medium lg:text-lg overflow-hidden whitespace-nowrap cursor-pointer text- hover:underline underline-offset-8 duration-150"
        >
          Property
        </Link>
        <Link
          href={"#contact"}
          className=" font-light text-sm lg:font-medium lg:text-lg overflow-hidden whitespace-nowrap cursor-pointer text- btn-cta text-white px-3 py-2"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Header;
