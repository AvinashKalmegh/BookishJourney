import axios from "axios";
import {
  USER_SIGNIN_FAILURE,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNUP_SUCCESS,
} from "./actionTypes";

const signinRequestAction = () => {
  return { type: USER_SIGNIN_REQUEST };
};

const signinSuccessAction = (payload) => {
  return { type: USER_SIGNIN_SUCCESS, payload };
};

const signupSuccessAction = (payload) => {
  return { type: USER_SIGNUP_SUCCESS, payload };
};

const signinFailureAction = () => {
  return { type: USER_SIGNIN_FAILURE };
};

// Function currying Js

export const signin = (userData) => (dispatch) => {
  dispatch(signinRequestAction());

  return axios
    .post("http://localhost:3500/api/user/signin", userData)
    .then((res) => {
      localStorage.setItem("token",JSON.stringify(res.data.token));
      dispatch(signinSuccessAction(res.data.token));
    })
    .catch((err) => {
      dispatch(signinFailureAction());
    });
};

export const signup = (userData) => (dispatch) => {
  dispatch(signinRequestAction());

  return axios
    .post("http://localhost:3500/api/user/signup", userData)
    .then((res) => {
      console.log(res);
      dispatch(signupSuccessAction(res));
    })
    .catch((err) => {
      dispatch(signinFailureAction());
    });
};
