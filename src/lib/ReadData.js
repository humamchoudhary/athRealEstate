import fsPromises from "fs/promises";
import path from "path";
export async function getLocalData() {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), "src/config.json");
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const objectData = JSON.parse(jsonData);

  return objectData;
}
export async function getCleintsData() {
  const filePath = path.join(process.cwd(), "src/config.json");
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const objectData = JSON.parse(jsonData)["cleints"];
  return objectData;
}

export async function getStatsData() {
  const filePath = path.join(process.cwd(), "src/config.json");
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const objectData = JSON.parse(jsonData)["stats"];
  return objectData;
}

export async function getFilterData() {
  const filePath = path.join(process.cwd(), "src/config.json");
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const listings = JSON.parse(jsonData)["listing"];
  const getUniqueValues = (data, key) => {
    return [...new Set(data.map((item) => item[key]))];
  };

  // Generate filters object
  const filters = {
    location: getUniqueValues(listings, "postal").map((city) => ({
      key: city,
    })),
    size: getUniqueValues(listings, "size_range").map((size) => ({
      key: size,
    })),
    range: getUniqueValues(listings, "price_range").map((price) => ({
      key: price,
    })),
    type: getUniqueValues(listings, "type").map((type) => ({ key: type })),
    doa: getUniqueValues(listings, "doa").map((doa) => ({ key: doa })),
  };

  return filters;
}

export async function getListingData() {
  const filePath = path.join(process.cwd(), "src/config.json");
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const objectData = JSON.parse(jsonData)["listing"];
  return objectData;
}
