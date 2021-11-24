import React, { useState } from "react";

import {
  Box,
  makeStyles,
  TextareaAutosize,
  Button,
  InputBase,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../apis/productApi";

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
    borderRadius: 5,
  },
  title: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px dashed #000000",
    borderRadius: "5px",
  },
  textfield: {
    width: "100%",
    height: "50px",
    padding: "5px",
    borderRadius: "5px",
    border: "1px solid #000000",
    fontSize: 16,
  },
  textarea: {
    width: "100%",
    fontSize: 16,
    padding: "5px",
    border: "1px solid #000000",
    borderRadius: "5px",
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
  categories: "Travel",
  createdDate: new Date(),
};

const CreatePost = () => {
  const classes = useStyle();

  const navigation = useNavigate();

  const [post, setPost] = useState(initialPost);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const savePost = async () => {
    await createPost(post);
    navigation("/admin");
    console.log(post);
  };
  return (
    <Box className={classes.container}>
      <Box className={classes.content}>
        <Box
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <Box style={{ width: "100%", marginRight: 3 }}>
            <h5> Title</h5>
            <InputBase
              name="title"
              className={classes.textfield}
              onChange={(e) => handleChange(e)}
            />
          </Box>
          <Box style={{ width: "100%", marginLeft: 3 }}>
            <h5> Category</h5>
            <InputBase
              name="categories"
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
        >
          Create
        </Button>
      </Box>
    </Box>
  );
};

export default CreatePost;
