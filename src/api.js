import axios from "axios";
// const dotenv = require("dotenv").config();

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID vJP9KkCfn5FWAe9cs6mB14nOY9j9wl0Vfe-IY9-l4Jw`,
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
