import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, registerSuccess } from "../features/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAuthCall = () => {
  const dispatch = useDispatch(); //use to define the fetchStart function
  const navigate = useNavigate();
  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        "https://17107.fullstack.clarusway.com/users/", //17107  10002
        userInfo
      );
      console.log("register", data);
      dispatch(registerSuccess(data));
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { register }; // use this to open the custom hook function globally
};

export default useAuthCall;

// https://react.dev/learn/reusing-logic-with-custom-hooks
