import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RegisterForm } from "../components/authentication/Register/index";
import { registerUser } from "../apis/account";
import { setLoading, setMessage } from "../redux/reducers/alertSlide";

const HandleRegister = () => {
  const { loading } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const handleRegister = async (values) => {
    dispatch(setLoading(true));

    const apiResponse = await registerUser(values);
    const success = apiResponse?.success;

    if (!success) {
      const payloadSuccess = {
        message: "Register Successfully",
        type: "success",
      };
      dispatch(setMessage(payloadSuccess));
    } else {
      dispatch(setMessage(apiResponse));
    }
  };
  dispatch(setLoading(false));

  return (
    <RegisterForm
      handleRegister={handleRegister}
      loading={loading}
    ></RegisterForm>
  );
};

export { HandleRegister };
