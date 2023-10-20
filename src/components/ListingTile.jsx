import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsDoorClosed } from "react-icons/bs";
import { BiBath } from "react-icons/bi";
import { RiAuctionFill } from "react-icons/ri";
import Link from "next/link";

function ListingTile({ details }) {
  return (
    <Link
      href={{ pathname: `/details/${details.fileno}` }}
      className="flex flex-col  w-full h-96 rounded-md overflow-hidden border border-gray-300 shadow-xl"
    >
      <div className="w-full basis-3/5 bg-gray-400 relative ">
        <Image
          src={details.images[0]}
          alt={details.name}
          fill
          style={{ objectFit: "cover", zIndex: 1 }}
        />
      </div>
      <div className="my-4 mx-4 flex flex-col gap-2">
        <div className="flex flex-row items-center justify-between">
          <p className=" font-semibold  text-lg ">{details.name}</p>
          <p className=" text-gray-500 text-md ">
            {details.type.replace(/^./, details.type[0].toUpperCase())}
          </p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <CiLocationOn />{" "}
          <p>
            {details.postal}, {details.city}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <p className="flex flex-row items-center gap-2 border border-gray-500 px-2 py-1 rounded-full text-sm">
              <BsDoorClosed /> {details.rooms} rooms
            </p>

            <p className="flex flex-row items-center gap-2 border border-gray-500 px-2 py-1 rounded-full text-sm">
              <BiBath /> {details.baths} bath
            </p>
          </div>
          <p className="text-gray-500 text-md">{details.size}</p>
        </div>
        <div className="flex flex-row items-center justify-between">
          <p className=" font-semibold text-lg">{details.price}</p>
          <p className=" text-gray-500 text-md flex flex-row items-center gap-2">
            <RiAuctionFill /> {details.doa}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ListingTile;
