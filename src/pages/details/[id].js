import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useRouter } from "next/router";
import { getListingData } from "@/lib/ReadData";
import Template from "@/components/Template";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { BsDoorClosed } from "react-icons/bs";
import { BiBath } from "react-icons/bi";
import { RiAuctionFill } from "react-icons/ri";
import { AiOutlineFileSearch } from "react-icons/ai";
import Contact from "@/components/Contact";

function DetailsPage({ listingData }) {
  const infoRef = useRef();
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({});
  useEffect(() => {
    if (listingData) {
      setData(listingData.filter((item) => item.fileno === id)[0]);
    }
  }, [listingData]);

  return (
    data && (
      <Template>
        <div className=" relative mt-12 min-h-screen flex flex-col lg:flex-row gap-12">
          <div className="w-full flex flex-col gap-4">
            <h1 className={" font-black text-4xl"}>{data.name}</h1>
            <p className=" font-medium text-md flex flex-row items-center gap-2 text-black">
              <CiLocationOn size={20} color="black" /> {data.postal},{" "}
              {data.city}
            </p>
            <div className="flex flex-row gap-4">
              <p className=" font-medium text-md flex flex-row items-center gap-2 text-black">
                <RiAuctionFill size={20} color="black" /> {data.doa}
              </p>
              <p className=" font-medium text-md flex flex-row items-center gap-2 text-black">
                <AiOutlineFileSearch size={20} color="black" /> {data.fileno}
              </p>
            </div>
            <div className=" invert">
              <Contact fileno={data.fileno} />
            </div>
            <div className=" my-16 flex flex-row gap-8">
              <div className=" text-base flex flex-col  items-start gap-2 text-black">
                <BsDoorClosed size={24} color="black" /> {data.rooms} Bedroom(s)
              </div>
              <div className=" text-base flex flex-col items-start gap-2 text-black">
                <BiBath size={24} color="black" /> {data.rooms} Bathrooms(s)
              </div>
            </div>
            <p>{data.desc}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sticky top-10  w-full h-full">
            <div className=" col-span-2 relative w-full h-80 overflow-hidden rounded-xl">
              <Image
                src={data.images && data.images[0]}
                alt="header"
                fill
                style={{ objectFit: "cover", zIndex: 1 }}
              />
            </div>
            <div className=" col-span-1 relative w-full h-52 overflow-hidden rounded-xl">
              <Image
                src={data.images && data.images[1]}
                alt="header"
                fill
                style={{ objectFit: "cover", zIndex: 1 }}
              />
            </div>
            <div className=" col-span-1 relative w-full h-52 overflow-hidden rounded-xl">
              <Image
                src={data.images && data.images[2]}
                alt="header"
                fill
                style={{ objectFit: "cover", zIndex: 1 }}
              />
            </div>
            <div className=" col-span-2 relative w-full h-80 overflow-hidden rounded-xl">
              <Image
                src={data.images && data.images[3]}
                alt="header"
                fill
                style={{ objectFit: "cover", zIndex: 1 }}
              />
            </div>
          </div>
        </div>
      </Template>
    )
  );
}

export default DetailsPage;
export async function getStaticProps() {
  const listingData = await getListingData();

  return {
    props: { listingData },
  };
}
export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};
