// src/api.js
const BASEURL = process.env.REACT_APP_BASEURL;
const APIKEY = process.env.REACT_APP_APIKEY;

export const getPopularMovies = async () => {
  const response = await fetch(`${BASEURL}/movie/popular?api_key=${APIKEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(`${BASEURL}/search/movie?api_key=${APIKEY}&query=${query}`);
  const data = await response.json();
  return data.results;
};

export const getLatestMovies = async () => {
  const response = await fetch(`${BASEURL}/movie/latest?api_key=${APIKEY}`);
  const data = await response.json();
  return [data]; // Return array with a single item for consistency with other lists
};

export const getMovieById = async (id) => {
  const response = await fetch(`${BASEURL}/movie/${id}?api_key=${APIKEY}`);
  const data = await response.json();
  return data;
};
