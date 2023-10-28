import React, { useEffect } from "react";
import { useState } from "react";
import FilterDW from "./FilterDW";
import Link from "next/link";

export default function SearchBar({ filterData, selectedData }) {
  const [filters, setFilters] = useState(new Map());

  return (
    <div className="flex flex-col w-min lg:pr-10  shadow-lg  lg:flex-row bg-white lg:h-20 mx-auto lg:mx-6 rounded-lg  lg:items-start items-center ">
      <FilterDW
        setFilters={setFilters}
        filters={filters}
        active={selectedData && selectedData["type"]}
        subline="select property type"
        keyTag="type"
        label={"Property Type"}
        items={filterData && filterData["type"]}
      />
      <FilterDW
        setFilters={setFilters}
        filters={filters}
        active={selectedData && selectedData["location"]}
        subline="select postal code"
        keyTag={"location"}
        label={"Location"}
        items={filterData && filterData["location"]}
      />
      <FilterDW
        setFilters={setFilters}
        filters={filters}
        active={selectedData && selectedData["range"]}
        subline="Min. Price - Max. Price"
        keyTag="range"
        label={"Price Range"}
        items={filterData && filterData["range"]}
      />
      <FilterDW
        setFilters={setFilters}
        filters={filters}
        active={selectedData && selectedData["size"]}
        subline="Min. Size - Max. Size"
        keyTag="size"
        label={"Size Range"}
        items={filterData && filterData["size"]}
      />
      <FilterDW
        setFilters={setFilters}
        filters={filters}
        active={selectedData && selectedData["doa"]}
        subline="select date of auction"
        keyTag="doa"
        label={"Date of Auction"}
        items={filterData && filterData["doa"]}
      />
      <Link
        href={{ pathname: "/catalog", query: Object.fromEntries(filters) }}
        className="text-black text-center bg-white px-8 py-2 rounded-lg my-4 mx-4 ml-8 flex flex-row items-center gap-3 border border-black duration-300  hover:invert"
      >
        Search
      </Link>
    </div>
  );
}
