import React, { useState } from "react";
import Login from "../components/authentication/LoginAdmin/index";
import { loginAdmin } from "../apis/account";
import { getTokenAdmin } from "../apis/authorityToken";
import Notification from "../components/alertMessage";

const LoginAdmin = () => {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {
    setLoading(true);
    const apiResponse = await loginAdmin(values);
    const success = apiResponse?.success;
    const failed = apiResponse?.failed;

    getTokenAdmin(apiResponse.accessToken);

    if (!success) {
      setNotify({
        isOpen: true,
        message: "Login Successfully",
        type: "success",
      });
      setTimeout(() => {
        window.location.href = "/admin";
      }, 1000);
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

      <Login handleLogin={handleLogin} loading={loading}></Login>
    </>
  );
};
export default LoginAdmin;
