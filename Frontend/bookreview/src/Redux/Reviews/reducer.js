
  
  const initialState = {
    reviews: [],
    isLoading: false,
    isError: false,
  };
  
  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_REVIEWS_REQUEST:
        return { ...state, isLoading: true };
      case GET_REVIEWS_SUCCESS:
        return { ...state, isLoading: false, books: payload };
      case GET_REVIEWS_FAILURE:
        return { ...state, isLoading: false, isError: true };
      case EDIT_REVIEW_SUCCESS:
        return { ...state, isLoading: false };
      default:
        return state;
    }
  };
  