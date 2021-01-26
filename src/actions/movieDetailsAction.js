//Importing axios
import axios from "axios";
//import API call URLs
import { movieDetailsURL } from "../api";

export const getMovieDetails = (movie_id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAILS",
  });

  const movieDetailsData = await axios.get(movieDetailsURL(movie_id));

  dispatch({
    type: "MOVIE_DETAILS",
    payload: movieDetailsData.data,
  });
};
