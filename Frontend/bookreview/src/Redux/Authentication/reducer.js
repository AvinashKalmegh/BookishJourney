import { USER_SIGNIN_FAILURE, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNUP_SUCCESS } from "./actionTypes";

  
  const initialState = {
    isAuth: false,
    token: "",
    isLoading: false,
    isError: false,
  };
  
  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case USER_SIGNIN_REQUEST:
        return { ...state, isLoading: true };
      case USER_SIGNIN_SUCCESS:
        return { ...state, isLoading: false, isAuth: true, token: payload };
        case USER_SIGNUP_SUCCESS:
          return { ...state, isLoading: false, isAuth: true};
      case USER_SIGNIN_FAILURE:
        return { ...state, isLoading: false, isError: true };
      default:
        return state;
    }
  };
  