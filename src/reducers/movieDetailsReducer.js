const initialState = {
  movie: {},
  isLoading: true,
};

const movieDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVIE_DETAILS":
      return {
        ...state,
        movie: action.payload,
        isLoading: false,
      };
    case "LOADING_DETAILS":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default movieDetailsReducer;
