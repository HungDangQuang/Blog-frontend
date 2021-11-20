import axiosClient from "./axiosClient";

const createPost = (params) => {
  return axiosClient("/post", {
    method: "POST",
    data: params,
  });
};

const getAllPosts = () => {
  return axiosClient("products", {
    method: "GET",
  });
};

const getOnePost = (params) => {
  return axiosClient(`/post/${params}`, {
    method: "GET",
  });
};

const updatePost = (params) => {
  return axiosClient(`/post/${params.id}`, {
    method: "PATCH",
    data: params,
  });
};

const deletePost = (params) => {
  return axiosClient(`/post/${params}`, {
    method: "DELETE",
  });
};

export { createPost, getAllPosts, getOnePost, updatePost, deletePost };
