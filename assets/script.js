
var apiUrl = "https://serpapi.com/search?q=";
var theme = 'animals'
var searchUrl = apiUrl + theme;
console.log(searchUrl);

import { getJson } from "serpapi";

const params = {
  q: "animals",
  tbm: "isch",
  ijn: "0",
  api_key: "secret_api_key"
};

// Show result as JSON
const response = await getJson("google", params);
console.log(response["images_results"]);