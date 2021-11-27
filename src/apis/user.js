import axiosClient from "./axiosClient";

const getUserInfo = () => {
  return axiosClient("/user", {
    method: "GET",
  });
};

const getOneUser = (id) => {
  return axiosClient(`/user/${id}`, {
    method: "GET",
  });
};

const updateUser = (params) => {
  return axiosClient(`/user/${params}`, {
    method: "PATCH",
  });
};

const deleteUser = (params) => {
  return axiosClient(`/user/${params}`, {
    method: "DELETE",
  });
};

export { getUserInfo, getOneUser, updateUser, deleteUser };
