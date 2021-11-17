import axiosClient from "./axiosClient";

const loginUser = (params) => {
  return axiosClient("/login", {
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

export { loginUser, registerUser };
