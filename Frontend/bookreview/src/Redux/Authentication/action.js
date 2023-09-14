import axios from "axios";
import {
  USER_SIGNIN_FAILURE,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNUP_SUCCESS,
} from "./actionTypes";

let url = "https://tiny-skirt-hen.cyclic.app";


const signinRequestAction = () => {
  return { type: USER_SIGNIN_REQUEST };
};

const signinSuccessAction = (payload) => {
  return { type: USER_SIGNIN_SUCCESS, payload };
};

const signupSuccessAction = (payload) => {
  console.log(payload);
  return { type: USER_SIGNUP_SUCCESS, payload };
};

const signinFailureAction = () => {
  return { type: USER_SIGNIN_FAILURE };
};

// Function currying Js

export const signin = (userData) => (dispatch) => {
  dispatch(signinRequestAction());

  return axios
    .post(`${url}/api/user/signin`, userData)
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("token",JSON.stringify(res.data.token))
      dispatch(signinSuccessAction(res.data.result));
    })
    .catch((err) => {
      dispatch(signinFailureAction());
    });
};

export const signup = (userData) => (dispatch) => {
  dispatch(signinRequestAction());

  return axios
    .post(`${url}/api/user/signup`, userData)
    .then((res) => {
      console.log(res.data.result);
      dispatch(signupSuccessAction(res.data.result));
    })
    .catch((err) => {
      dispatch(signinFailureAction());
    });
};
