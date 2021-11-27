import React, { useState } from "react";
import Notification from "../alertMessage/index";

import {
  Box,
  makeStyles,
  TextareaAutosize,
  Button,
  InputBase,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../apis/productApi";
import * as ReactBootStrap from "react-bootstrap";

const useStyle = makeStyles((theme) => ({
  container: {
    margin: "100px 95px",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  image: {
    width: "100%",
    height: "60vh",
    objectFit: "cover",
    marginTop: 100,
  },
  title: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px dashed #000000",
  },
  textfield: {
    width: "100%",
    height: "50px",
    padding: "5px",
    backgroundColor: "#ffff",
    border: "1px solid #000000",
    fontSize: 16,
  },
  textarea: {
    width: "100%",
    fontSize: 16,
    padding: "5px",
    border: "1px solid #000000",
    "&:focus-visible": {
      outline: "none",
    },
  },
  content: {
    display: "flex",
    height: "500px",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "end",
    margin: "0 60px",
  },
}));

const initialPost = {
  title: "",
  description: "",
  picture: "",
  username: "Admin",
  categories: "",
  createdDate: new Date(),
};

const CreatePost = () => {
  const classes = useStyle();

  const [loading, setLoading] = useState(false);

  const navigation = useNavigate();

  const [post, setPost] = useState(initialPost);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const savePost = async () => {
    setLoading(true);
    await createPost(post);
    setNotify({
      isOpen: true,
      message: "Create Successfully",
      type: "success",
    });
    setLoading(false);

    setTimeout(() => {
      navigation("/admin");
    }, 1000);
  };
  return (
    <Box className={classes.container}>
      <Notification notify={notify} setNotify={setNotify} />

      <Box className={classes.content}>
        <Box
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <Box style={{ width: "100%" }}>
            <h5> Title</h5>
            <InputBase
              name="title"
              className={classes.textfield}
              onChange={(e) => handleChange(e)}
            />
          </Box>
        </Box>

        <Box style={{ width: "100%" }}>
          <h5> ImageURL</h5>
          <InputBase
            name="picture"
            className={classes.textfield}
            onChange={(e) => handleChange(e)}
          />
        </Box>
        <Box style={{ width: "100%" }}>
          <h5>Content</h5>
          <TextareaAutosize
            rowsMin={7}
            space
            placeholder="Write something awesome..."
            className={classes.textarea}
            name="description"
            onChange={(e) => handleChange(e)}
          />
        </Box>

        <Button
          onClick={() => savePost()}
          xs={{ marginTop: "10px" }}
          variant="contained"
          color="primary"
          endIcon={
            loading && <ReactBootStrap.Spinner animation="border" size="sm" />
          }
        >
          Create
        </Button>
      </Box>
    </Box>
  );
};

export default CreatePost;
