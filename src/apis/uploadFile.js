import axiosClient from "./axiosClient";

const uploadFile = (params) => {
  return axiosClient("/file/upload", {
    method: "POST",
    data: params,
  });
};

const getImage = (params) => {
  return axiosClient(`/file/${params}`, {
    method: "GET",
  });
};

export { uploadFile, getImage };
