import axiosClient from "./axiosClient";
import axiosAdmin from "./axiosAdmin";
const loginUser = (params) => {
  return axiosClient("/login", {
    method: "POST",
    data: params,
  });
};

const loginAdmin = (params) => {
  return axiosAdmin("/login", {
    method: "POST",
    data: params,
  });
};

const registerUser = (params) => {
  return axiosClient("/register", {
    method: "POST",
    data: params,
  });
};

export { loginUser, registerUser, loginAdmin };
