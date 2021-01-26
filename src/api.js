const base_url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}`;

//Home page URL
export const homePageURL = () => `${base_url}&s=batman`;

//Searched movies URL
export const searchURL = (title) => `${base_url}&s=${title}`;

//Get Individual Movie Details
export const movieDetailsURL = (movie_id) =>
  `${base_url}&i=${movie_id}&plot=full`;
