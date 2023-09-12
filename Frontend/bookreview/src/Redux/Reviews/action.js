import axios from "axios";
import { EDIT_REVIEW_SUCCESS, GET_REVIEWS_FAILURE, GET_REVIEWS_REQUEST, GET_REVIEWS_SUCCESS } from "./actionTypes";


const getReviewsRequestAction = () => {
  return { type: GET_REVIEWS_REQUEST };
};

const getReviewsSuccessAction = (payload) => {
  return { type: GET_REVIEWS_SUCCESS, payload };
};

const getReviewsFailureAction = () => {
  return { type: GET_REVIEWS_FAILURE };
};

const editReviewSuccess = () => {
  return { type: EDIT_REVIEW_SUCCESS };
};

export const getReviews =
  (param = {}) =>
  (dispatch) => {
    dispatch(getReviewsRequestAction());

    axios
      .get("http://localhost:3500/api/review", param)
      .then((res) => {
        console.log(res);
        dispatch(getReviewsSuccessAction(res));
      })
      .catch((err) => {
        dispatch(getReviewsFailureAction());
      });
  };

export const editReview = (id, bookData) => (dispatch) => {
  return axios.patch(`http://localhost:3500/api/review/${id}`, bookData).then(() => {
    dispatch(editReviewSuccess());
  });
};

// ?category=Novel&category=Motivational
