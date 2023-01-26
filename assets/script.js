//jen's API a4a6db4f2015502f33fd07a0dabf3c5c4f2804cceedd61c91db6f93d0cff030a

//hardcode link for animals query "https://www.google.com/search?q=animals&oq=animals&uule=w+CAIQICIaQXVzdGluLFRleGFzLFVuaXRlZCBTdGF0ZXM&gl=us&tbm=isch&sourceid=chrome&ie=UTF-8"

var apiUrl = "https://serpapi.com/search?q=";
var theme = 'animals'
var searchUrl = apiUrl + theme;
console.log(searchUrl);

import { getJson } from "serpapi";

async function searchAPI(){
const params = {
  api_key: "a4a6db4f2015502f33fd07a0dabf3c5c4f2804cceedd61c91db6f93d0cff030a",
  q: "animals",
  location: "Austin, Texas, United States",
  google_domain: "google.com",
  gl: "us",
  hl: "en",
  tbm: "isch"
};

// Show result as JSON
const response = await getJson("google", params);
console.log(response);
}
searchAPI();