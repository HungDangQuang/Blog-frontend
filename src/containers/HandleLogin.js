import React, { useState } from "react";
import { LoginForm } from "../components/authentication/Login/index";
import { loginUser } from "../apis/account";
import { getToken, getID } from "../apis/authorityToken";
import Notification from "../components/alertMessage";
import { useSelector } from "react-redux";
const HandleLogin = () => {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user);

  const handleLogin = async (values) => {
    setLoading(true);
    const apiResponse = await loginUser(values);
    const success = apiResponse?.success;

    getToken(apiResponse.accessToken);
    getID(apiResponse.id);

    if (!success) {
      setNotify({
        isOpen: true,
        message: "Login Successfully",
        type: "success",
      });

      setTimeout(() => {
        if (user.role == "admin") {
          window.location.href = "/admin";
        } else {
          window.location.href = "/home";
        }
      }, 1000);
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

export { HandleLogin };
