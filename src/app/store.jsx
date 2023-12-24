import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice"; // the name I chose > authReducer

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== "production",   //The product also makes states hidden
});
export default store;
