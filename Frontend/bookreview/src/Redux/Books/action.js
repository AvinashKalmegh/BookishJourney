import axios from "axios";
import {
  EDIT_BOOK_SUCCESS,
  GET_BOOKS_FAILURE,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_SEARCH_SUCCESS,
} from "./actionTypes";

const getBooksRequestAction = () => {
  return { type: GET_BOOKS_REQUEST };
};

const getBooksSuccessAction = (payload) => {
  return { type: GET_BOOKS_SUCCESS, payload };
};

const getSearchSuccessAction = (payload) => {
  return { type: GET_SEARCH_SUCCESS, payload };
};

const getBooksFailureAction = () => {
  return { type: GET_BOOKS_FAILURE };
};

const editBookSuccess = () => {
  return { type: EDIT_BOOK_SUCCESS };
};

export const getBooks =
  () =>
  (dispatch) => {
    dispatch(getBooksRequestAction());

    axios
      .get(`https://tiny-rose-cockroach-wrap.cyclic.app/api/book`)
      .then((res) => {
        dispatch(getBooksSuccessAction(res.data.result));
      })
      .catch((err) => {
        dispatch(getBooksFailureAction());
      });
  };

  export const getSearch =
  (text) =>
  (dispatch) => {
    dispatch(getBooksRequestAction());

    axios
      .get(`https://tiny-rose-cockroach-wrap.cyclic.app/api/book/search/${text}`)
      .then((res) => {
        dispatch(getSearchSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(getBooksFailureAction());
      });
  };

  export const getSpecificBooks =
  (id) =>
  (dispatch) => {
    dispatch(getBooksRequestAction());

    axios
      .get(`https://tiny-rose-cockroach-wrap.cyclic.app/api/book/${id}`)
      .then((res) => {
        dispatch(getBooksSuccessAction(res.data.result));
      })
      .catch((err) => {
        dispatch(getBooksFailureAction());
      });
  };

export const editBook = (id, bookData) => (dispatch) => {
  return axios.patch(`https://tiny-rose-cockroach-wrap.cyclic.app/api/book/${id}`, bookData).then(() => {
    dispatch(editBookSuccess());
  });
};

// ?category=Novel&category=Motivational
