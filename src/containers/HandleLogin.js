import React, { useState } from "react";
import { LoginForm } from "../components/authentication/Login/index";
import { loginUser } from "../apis/account";
import { getToken } from "../apis/authorityToken";
import { getUserInfo } from "../apis/user";
import Notification from "../components/alertMessage";
import Loading from "../components/loading/Loading.jsx";
const HandleLogin = () => {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const [loading, setLoading] = useState(false);

  console.log(loading);
  const handleLogin = async (values) => {
    setLoading(true);
    const apiResponse = await loginUser(values);
    const success = apiResponse?.success;
    const apiRes = await getUserInfo();

    console.log(apiRes);

    getToken(apiResponse.accessToken);

    if (!success) {
      setNotify({
        isOpen: true,
        message: "Login Successfully",
        type: "success",
      });
      // setTimeout(() => {
      //   window.location.href = "/admin";
      // }, 2000);
    }
  };

  return (
    <>
      <Notification notify={notify} setNotify={setNotify} />

      <LoginForm handleLogin={handleLogin} loading={loading}></LoginForm>
    </>
  );
};

export { HandleLogin };
