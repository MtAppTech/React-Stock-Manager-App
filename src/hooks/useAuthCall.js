import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFail,
  fetchStart,
  registerSuccess,
  loginSuccess,
  logoutSuccess,
} from "../features/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "..//helper/ToastNotify";
const BASE_URL= import.meta.env.VITE_BASE_URL;

const useAuthCall = () => {
  const dispatch = useDispatch(); //use to define the fetchStart function
  const navigate = useNavigate();
  const { token } = useSelector((store) => store.auth);

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}users/`, //17107  10002
        userInfo
      );
      console.log("register", data);
      dispatch(registerSuccess(data));
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        //`https://17107.fullstack.clarusway.com/auth/login/`,
        `${BASE_URL}auth/login/`,
        userInfo
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login performed");
      navigate("/stock");
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      toastErrorNotify("Login can not be performed");
    }
  };
  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios.get(`https://17107.fullstack.clarusway.com/auth/logout/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout performed");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      toastErrorNotify("Logout can not be performed");
    }
  };
  return { register, login, logout }; // use this to open the custom hook function globally
};

export default useAuthCall;

// https://react.dev/learn/reusing-logic-with-custom-hooks
