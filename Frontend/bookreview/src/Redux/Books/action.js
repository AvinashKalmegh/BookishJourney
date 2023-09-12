import axios from "axios";
import {
  EDIT_BOOK_SUCCESS,
  GET_BOOKS_FAILURE,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
} from "./actionTypes";

const getBooksRequestAction = () => {
  return { type: GET_BOOKS_REQUEST };
};

const getBooksSuccessAction = (payload) => {
  return { type: GET_BOOKS_SUCCESS, payload };
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
      .get(`http://localhost:3500/api/book/`)
      .then((res) => {
        dispatch(getBooksSuccessAction(res.data.result));
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
      .get(`http://localhost:3500/api/book/${id}`)
      .then((res) => {
        dispatch(getBooksSuccessAction(res.data.result));
      })
      .catch((err) => {
        dispatch(getBooksFailureAction());
      });
  };

export const editBook = (id, bookData) => (dispatch) => {
  return axios.patch(`http://localhost:3500/api/book/${id}`, bookData).then(() => {
    dispatch(editBookSuccess());
  });
};

// ?category=Novel&category=Motivational
