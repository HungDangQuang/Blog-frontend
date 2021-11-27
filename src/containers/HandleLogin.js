import React, { useState } from "react";
import { LoginForm } from "../components/authentication/Login/index";
import { loginUser } from "../apis/account";
import { getToken, getID } from "../apis/authorityToken";
import Notification from "../components/alertMessage";

const HandleLogin = () => {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {
    setLoading(true);
    const apiResponse = await loginUser(values);
    console.log(apiResponse);
    const success = apiResponse?.success;
    const failed = apiResponse?.failed;

    getToken(apiResponse.accessToken);
    getID(apiResponse.id);

    if (!success) {
      setNotify({
        isOpen: true,
        message: "Login Successfully",
        type: "success",
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } else if (!failed) {
      setNotify({
        isOpen: true,
        message: "Login failed ",
        type: "error",
      });
    }
    setLoading(false);
  };

  return (
    <>
      <Notification notify={notify} setNotify={setNotify} />

      <LoginForm handleLogin={handleLogin} loading={loading}></LoginForm>
    </>
  );
};
export default HandleLogin;
