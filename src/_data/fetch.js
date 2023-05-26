require('dotenv').config();
const EleventyFetch = require("@11ty/eleventy-fetch");

async function getImage(){
    const url = `https://api.nasa.gov/planetary/apod?api_key=P2cQAUnjmawmIKboFijT58RDdQYLZ5wEGZxdLdDY`;
    const response = await EleventyFetch(url, {
        duration: "1d", 
        type: "json"   
      });
      const apod = response;
      return apod;
}
module.exports = getImage;