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
  const objectData = JSON.parse(jsonData)["filters"];
  return objectData;
}

export async function getListingData() {
  const filePath = path.join(process.cwd(), "src/config.json");
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const objectData = JSON.parse(jsonData)["listing"];
  return objectData;
}
