import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Template from "@/components/Template";
import ListingTile from "@/components/ListingTile";
import { getListingData, getFilterData } from "@/lib/ReadData";
import SearchBar from "@/components/SearchBar";
function catelog({ listings, filterData }) {
  const router = useRouter();
  const filters = router.query;

  // const filters = {
  //   range: "4000$+",
  // };
  const [data, setData] = useState([]);
  useEffect(() => {
    if (filters) {
      const filteredData = listings.filter((item) => {
        return (
          (!filters.type || item.type.toLowerCase() === filters.type) &&
          (!filters.location ||
            item.postal.toLowerCase() === filters.location.toLowerCase()) &&
          (!filters.doa ||
            item.doa.toLowerCase() === filters.doa.toLowerCase()) &&
          (!filters.size ||
            (filters.size.includes("+") &&
              parseInt(filters.size.split("$")[0].replace("+", "")) <
                parseInt(item.size.split("$")[1].split(",").join(""))) ||
            (parseInt(item.size.split("km2")[0]) >=
              parseInt(filters.size.split("km2")[0].replace("-", "")) &&
              parseInt(item.size.split("km2")[0]) <=
                parseInt(filters.size.split("km2")[1].replace("-", "")))) &&
          (!filters.range ||
            (filters.range.includes("+") &&
              parseInt(filters.range.split("$")[0].replace("+", "")) <
                parseInt(item.price.split("$")[1].split(",").join(""))) ||
            (parseInt(item.price.split("$")[1].split(",").join("")) >=
              parseInt(filters.range.split("$")[0].replace("-", "")) &&
              parseInt(item.price.split("$")[1].split(",").join("")) <=
                parseInt(
                  filters.range
                    .split("$")[1]
                    .split(",")
                    .join("")
                    .replace("-", "")
                )))
        );
      });
      setData(filteredData);
    }
  }, [filters]);

  return (
    <Template>
      <div className=" min-h-screen">
        <SearchBar selectedData={filters} filterData={filterData} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {data &&
            data.map((item) => {
              return <ListingTile details={item} />;
            })}
        </div>
      </div>
    </Template>
  );
}

export default catelog;

export async function getStaticProps() {
  const listings = await getListingData();
  const filterData = await getFilterData();
  return {
    props: { listings, filterData },
  };
}
