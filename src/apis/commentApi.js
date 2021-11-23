import axiosClient from "./axiosClient";
import axios from "axios";

const url = "https://youbo.herokuapp.com";

const createComment = async (comment) => {
  try {
    return await axios.post(`${url}/comment`, comment);
  } catch (error) {
    console.log("Error while calling newComment API ", error);
  }
};

const getAllComment = () => {
  return axiosClient("/comment", {
    method: "GET",
  });
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

export { createComment, getAllComment, getComments, deleteComment };
