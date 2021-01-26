//Importing Reducers
import moviesReducer from "./moviesReducer";
import movieDetailsReducer from "./movieDetailsReducer";
//combine reducers
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  movies: moviesReducer,
  movieDetails: movieDetailsReducer,
});

export default rootReducer;
