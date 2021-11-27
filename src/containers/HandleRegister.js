import React, { useState } from "react";
import Register from "../components/authentication/Register/RegisterForm";
import { registerUser } from "../apis/account";
import { getToken, getID } from "../apis/authorityToken";
import Notification from "../components/alertMessage";

const HandleRegister = () => {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {
    setLoading(true);
    const apiResponse = await registerUser(values);
    const success = apiResponse?.success;

    getToken(apiResponse.accessToken);
    getID(apiResponse.id);

    if (!success) {
      setNotify({
        isOpen: true,
        message: "Register Successfully",
        type: "success",
      });
      setTimeout(() => {
        window.location.href = "/admin";
      }, 2000);
    }
    setLoading(false);
  };

  return (
    <>
      <Notification notify={notify} setNotify={setNotify} />

      <Register handleLogin={handleLogin} loading={loading}></Register>
    </>
  );
};
export default HandleRegister;
