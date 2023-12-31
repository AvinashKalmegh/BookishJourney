import { EDIT_BOOK_SUCCESS, GET_BOOKS_FAILURE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS, GET_SEARCH_SUCCESS } from "./actionTypes";

  
  const initialState = {
    books: [],
    search:[],
    isLoading: false,
    isError: false,
  };
  
  export const reducer = (state = initialState, { type, payload }) => {
    // console.log(payload,"pay");
    switch (type) {
      case GET_BOOKS_REQUEST:
        return { ...state, isLoading: true };
      case GET_BOOKS_SUCCESS:
        return { ...state, isLoading: false, books: payload };
        case GET_SEARCH_SUCCESS:
          return { ...state, isLoading: false, search: payload };
      case GET_BOOKS_FAILURE:
        return { ...state, isLoading: false, isError: true };
      case EDIT_BOOK_SUCCESS:
        return { ...state, isLoading: false };
      default:
        return state;
    }
  };
  