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

const updatePost = async (id, post) => {
  try {
    return await axios.patch(`${url}/post/${id}`, post);
  } catch (error) {
    console.log("Error while calling updatePost API ", error);
  }
};
const deletePost = (params) => {
  return axiosClient(`/post/${params}`, {
    method: "DELETE",
  });
};

export { createPost, getAllPosts, getOnePost, updatePost, deletePost };
