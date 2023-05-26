const EleventyFetch = require("@11ty/eleventy-fetch");

async function getImage() {
  const api = "https://api.nasa.gov/planetary/apod?api_key=P2cQAUnjmawmIKboFijT58RDdQYLZ5wEGZxdLdDY";
  const response = await EleventyFetch(api, {
    duration: "1d",
    type: "json"
  });
  const hdImage = response.hdurl; 
  return hdImage; 
}
module.exports = getImage;