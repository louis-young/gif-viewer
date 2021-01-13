import axios from "axios";

import { GIFS_PER_PAGE } from "../constants/constants";

const fetchGifs = (offset) => {
  const url = `${process.env.REACT_APP_API_BASE_URL}/v1/gifs/trending?offset=${offset}&limit=${GIFS_PER_PAGE}&api_key=${process.env.REACT_APP_API_KEY}`;

  const response = axios.get(url);

  return response;
};

export { fetchGifs };
