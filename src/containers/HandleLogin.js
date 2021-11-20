import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { LoginForm } from "../components/authentication/Login/index";
import { loginUser } from "../apis/account";
import { setLoading, setMessage } from "../redux/reducers/alertSlide";

const HandleLogin = () => {
  const { loading } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const handleLogin = async (values) => {

    dispatch(setLoading(true));

    const apiResponse = await loginUser(values);
    const success = apiResponse?.success;

    if (!success) {
      const payloadSuccess = {
        message: "Login Successfully",
        type: "success",
      };
      dispatch(setMessage(payloadSuccess));

      setTimeout(() => {
        window.location.href = "/home";
      }, 1000);
    } else {
      dispatch(setMessage(apiResponse));
    }
  };
  dispatch(setLoading(false));

  return <LoginForm handleLogin={handleLogin} loading={loading}></LoginForm>;
};

export { HandleLogin };
