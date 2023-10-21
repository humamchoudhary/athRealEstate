import Avatar from "@/components/Avatar";
import Template from "@/components/Template";
import Image from "next/image";
import { getCleintsData, getStatsData, getFilterData } from "../lib/ReadData";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";
export default function Home({ cleintsData, statsData, filterData }) {
  return (
    <Template>
      <div className="flex  relative items-center justify-center w-full lg:min-h-[85vh] rounded-3xl overflow-hidden py-8">
        <div className="  z-20  flex flex-col  justify-center items-center text-center gap-8 mt-8">
          <p className=" font-semibold text-white text-6xl basis-1/2">
            Start Your Dream Home Journey
          </p>
          <SearchBar filterData={filterData} />
        </div>
        <div className="w-full h-full absolute bg-gray-700 z-10 opacity-50"></div>
        <Image
          src="/bg2.jpg"
          alt="header"
          fill
          style={{ objectFit: "cover", zIndex: 1, marginBottom: "2rem" }}
        />
      </div>
      <div
        className="lg:px-24 w-full mt-16 mb-8 flex flex-col gap-16"
        id="about"
      >
        <div className=" flex flex-col lg:flex-row justify-between w-full lg:text-start text-center gap-4 ">
          <p className=" font-semibold text-5xl basis-1/2">
            Your Trusted Real Estate Consultants
          </p>
          <p className="  font-light text-xl basis-2/5">
            Minim culpa culpa culpa amet ex nulla sint ipsum sint officia
            adipisicing. Exercitation adipisicing ipsum aliquip amet culpa do
            Lorem minim et enim velit magna consectetur. Duis culpa pariatur
            dolore officia aliquip. Ex ea exercitation sint excepteur. Sint nisi
            mollit proident laborum eiusmod magna et ad aliquip. Voluptate
            aliquip in fugiat esse ut adipisicing non non.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 h-max">
          <div className="grid lg:w-1/2 lg:grid-cols-2 grid-cols-1 gap-3 ">
            <div className="flex flex-col justify-between lg:h-48 p-8 bg-gray-50 rounded-md">
              <p className="font-black text-3xl">{statsData.cities}</p>
              <p className=" font-light text-lg">Citites</p>
            </div>
            <div className="flex flex-col justify-between lg:h-48 p-8 bg-gray-200 rounded-md">
              <p className="font-black text-3xl">{statsData.experince}</p>
              <p className=" font-light text-lg">Years Of Experince </p>
            </div>
            <div className="flex flex-col justify-between lg:h-48 p-8 bg-gray-100 rounded-md">
              <p className="font-black text-3xl">{statsData.sales}</p>
              <p className=" font-light text-lg">Properties Sold</p>
            </div>
            <div className="flex flex-col justify-between lg:h-48 p-8 bg-black rounded-md">
              <p className="font-black text-3xl text-white">
                {statsData.cleints}
              </p>
              <p className=" font-light text-lg text-white">
                Satisfied customers
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row  w-full  lg:w-1/2 bg-gray-200 p-8 rounded-md gap-5">
            <div className="flex flex-col gap-4 basis-3/5 justify-between ">
              <p className=" ">
                Adipisicing laborum magna et occaecat et laborum enim ipsum. Sit
                mollit voluptate eu amet duis laborum sunt dolor velit Lorem.
                Magna voluptate sit sunt ipsum. Deserunt eiusmod do occaecat ex
                pariatur eu consectetur cillum.
              </p>

              <Link
                href={"#contact"}
                className="font-medium text-sm cursor-pointer btn-cta text-white px-5 py-3"
              >
                Contact Us
              </Link>
            </div>
            <div className="  rounded-md overflow-hidden bg-gray-900"></div>
            <div className="relative lg:basis-1/3 h-96  rounded-md overflow-hidden bg-gray-400">
              <Image
                src="/building.jpg"
                alt="building"
                fill
                style={{
                  objectFit: "cover",
                  zIndex: 1,
                }}
              />
            </div>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row justify-between w-full lg:text-start text-center gap-4">
          <p className=" font-semibold text-5xl basis-1/2">
            Real Estate Without the Hassle
          </p>
          <p className="  font-light text-xl basis-2/5">
            Minim culpa culpa culpa amet ex nulla sint ipsum sint officia
            adipisicing. Exercitation adipisicing ipsum aliquip amet culpa do
            Lorem minim et enim velit magna consectetur. Duis culpa pariatur
            dolore officia aliquip. Ex ea exercitation sint excepteur. Sint nisi
            mollit proident laborum eiusmod magna et ad aliquip. Voluptate
            aliquip in fugiat esse ut adipisicing non non.
          </p>
        </div>
        <div className=" flex flex-col  items-center w-full">
          <div className="flex flex-col justify-center items-center text-center gap-4">
            <h1 className=" font-semibold text-5xl">
              Dont Trust Us, Trust Their Voice
            </h1>
            <p className="font-medium text-lg w-2/3 ">
              Discover our valued cleints, Whom we helped and they left with joy
              and embark on the quest of their dream house or perfect profit
              Properties
            </p>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-10">
            {cleintsData &&
              cleintsData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${
                      index === 0 || index === 3
                        ? "col-span-2 bg-gray-50"
                        : "col-span-1 bg-gray-100"
                    } flex flex-row  justify-between  py-3 `}
                  >
                    <div className="w-[95%] h-80 py-4 px-10">
                      <Avatar src={item.image} style="ml-16 " />
                      <p className="w-[90%] font-medium text-xl mt-4 line-clamp-3">
                        {item.message}
                      </p>
                      <p className="w-2/3 font-semibold text-xl mt-4">
                        {item.name}
                      </p>
                    </div>
                    <div className="flex mr-4 items-end">
                      <div className=" relative h-20 w-20 opacity-20 bottom-0">
                        <Image
                          src="/quote.png"
                          alt="header"
                          objectFit="cover"
                          layout="fill"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Template>
  );
}
export async function getStaticProps() {
  const cleintsData = await getCleintsData();
  const statsData = await getStatsData();
  const filterData = await getFilterData();

  return {
    props: { cleintsData, statsData, filterData },
  };
}
