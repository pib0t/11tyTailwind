require('dotenv').config();
const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  let url = "https://api.nasa.gov/planetary/apod?api_key=P2cQAUnjmawmIKboFijT58RDdQYLZ5wEGZxdLdDY";
  let imageUrl = await EleventyFetch(url, {
    duration: "1d",
    type: "json"
  });
return imageUrl;
}
