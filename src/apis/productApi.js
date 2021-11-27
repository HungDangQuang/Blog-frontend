import axiosClient from "./axiosClient";
import axios from "axios";
const url = "https://youbo.herokuapp.com";

const createPost = (params) => {
  return axiosClient("/post", {
    method: "POST",
    data: params,
  });
};

const getAllPosts = () => {
  return axiosClient("/post", {
    method: "GET",
  });
};

const getOnePost = async (id) => {
  try {
    return await axios.get(`${url}/post/${id}`);
  } catch (error) {
    console.log(error);
  }
};

const updatePost = (id, params) => {
  return axiosClient(`/post/${id}`, {
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
