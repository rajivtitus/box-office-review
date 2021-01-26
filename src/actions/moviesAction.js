//Importing axios
import axios from "axios";
//import API call URLs
import { homePageURL, searchURL } from "../api";

export const getPopularMovies = () => async (dispatch) => {
  const moviesData = await axios.get(homePageURL());

  dispatch({
    type: "FETCH_MOVIES",
    payload: moviesData.data.Search,
  });
};

export const getSearchedMovies = (movie_title) => async (dispatch) => {
  const searchedMoviesData = await axios.get(searchURL(movie_title));

  dispatch({
    type: "SEARCHED_MOVIES",
    payload: searchedMoviesData.data.Search,
  });
};
