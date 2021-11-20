import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  makeStyles,
  TextareaAutosize,
  Button,
  FormControl,
  InputBase,
} from "@material-ui/core";

import { AddCircle as Add, CallEnd } from "@material-ui/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { uploadFile } from "../../apis/uploadFile";
import { createPost } from "../../apis/productApi";

const useStyle = makeStyles((theme) => ({
  container: {
    margin: "0 95px",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  image: {
    width: "100%",
    height: "55vh",
    objectFit: "cover",
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
    fontSize: 25,
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
  username: "",
  categories: "",
  createdDate: new Date(),
};

const CreatePost = () => {
  const classes = useStyle();

  const navigation = useNavigate();
  const location = useLocation();

  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState("");
  const [imageURL, setImageURL] = useState("");
  // const { account, setAccount } = useContext("");

  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const image = await uploadFile(data);
        post.picture = image.data;
        console.log(image);
        setImageURL(image.data);
      }
    };

    getImage();
    post.categories = location.search?.split("=")[1] || "All";
    // post.username = account;
  }, [file]);

  const savePost = async () => {
    await createPost(post);
    navigation("/");
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  return (
    <Box className={classes.container}>
      <img src={url} alt="post" className={classes.image} />

      <Box className={classes.content}>
        <Box style={{ width: "100%" }}>
          <h5> Title</h5>
          <InputBase
            name="title"
            placeholder="Title"
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

        <Box style={{ width: "100%" }}>
          <h5>Image</h5>
          <FormControl className={classes.title}>
            <label htmlFor="fileInput">
              <Add
                className={classes.addIcon}
                fontSize="large"
                color="action"
              />
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </FormControl>
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
