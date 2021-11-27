import axiosClient from "./axiosClient";
import axios from "axios";

const url = "https://youbo.herokuapp.com";

const createComment = (params) => {
  return axiosClient("/comment", {
    method: "POST",
    data: params,
  });
};

const getAllComment = () => {
  return axiosClient("/comment", {
    method: "GET",
  });
};

const getCommentsPost = async (id) => {
  try {
    let response = await axios.get(`${url}/comments/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getComments API ", error);
  }
};

const getComments = async (id) => {
  try {
    let response = await axios.get(`${url}/comment/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getComments API ", error);
  }
};
const deleteComment = (params) => {
  return axiosClient(`/comment/${params}`, {
    method: "DELETE",
  });
};

export {
  createComment,
  getAllComment,
  getComments,
  deleteComment,
  getCommentsPost,
};
