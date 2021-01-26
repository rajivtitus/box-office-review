const initialState = {
  popular: [],
  searched: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return {
        ...state,
        popular: action.payload,
      };

    case "SEARCHED_MOVIES":
      return {
        ...state,
        searched: action.payload,
      };

    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };

    default:
      return state;
  }
};

export default moviesReducer;
