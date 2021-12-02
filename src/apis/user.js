import axiosAdmin from "./axiosAdmin";
import axiosClient from "./axiosClient";

const getUserInfo = () => {
  return axiosAdmin("/user", {
    method: "GET",
  });
};

const getOneUser = (id) => {
  return axiosClient(`/user/${id}`, {
    method: "GET",
  });
};

const updateUser = (params) => {
  return axiosAdmin(`/user/${params}`, {
    method: "PATCH",
  });
};

const deleteUser = (params) => {
  return axiosAdmin(`/user/${params}`, {
    method: "DELETE",
  });
};

export { getUserInfo, getOneUser, updateUser, deleteUser };
