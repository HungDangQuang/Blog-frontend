import axiosClient from "./axiosClient";
import axios from "axios";
import axiosAdmin from "./axiosAdmin";
const url = "https://youbo.herokuapp.com";

const createPost = (params) => {
  return axiosAdmin("/post", {
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
  return axiosAdmin(`/post/${id}`, {
    method: "PATCH",
    data: params,
  });
};

const deletePost = (params) => {
  return axiosAdmin(`/post/${params}`, {
    method: "DELETE",
  });
};

export { createPost, getAllPosts, getOnePost, updatePost, deletePost };
