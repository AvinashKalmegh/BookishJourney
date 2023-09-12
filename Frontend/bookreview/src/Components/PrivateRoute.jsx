import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  let isToken = JSON.parse(localStorage.getItem("token"));
  const location = useLocation();
  // console.log((isToken,"pr"));

  if (isToken) {
    return children; //<SingleBook />
  }
  return <Navigate to={"/signin"} state={location.pathname} replace />;
};
