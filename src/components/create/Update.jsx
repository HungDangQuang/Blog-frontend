import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  makeStyles,
  TextareaAutosize,
  Button,
  FormControl,
  InputBase,
} from "@material-ui/core";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { updatePost, getOnePost } from "../../apis/productApi";

const useStyle = makeStyles((theme) => ({
  textupdate: {
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

const Update = ({ match }) => {
  const classes = useStyle();
  const navigation = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState(initialPost);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getOnePost(id);
      setPost(data);
    };
    fetchData();
  }, [id]);

  const updateBlogPost = async () => {
    await updatePost(id, post);

    navigation("/admin");
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <Box className={classes.textupdate}>
      <FormControl className={classes.title}>
        <Stack>
          <Box style={{ width: "100%" }}>
            <h5> Title</h5>
            <InputBase
              onChange={(e) => handleChange(e)}
              value={post.title}
              name="title"
              className={classes.textfield}
            />
          </Box>
          <Box style={{ width: "100%" }}>
            <h5> Category</h5>
            <InputBase
              onChange={(e) => handleChange(e)}
              value={post.categories}
              name="categories"
              className={classes.textfield}
            />
          </Box>
        </Stack>

        <Box style={{ width: "100%" }}>
          <h5> ImageURL</h5>
          <InputBase
            onChange={(e) => handleChange(e)}
            value={post.picture}
            name="picture"
            className={classes.textfield}
          />
        </Box>

        <Box style={{ width: "100%" }}>
          <h5>Content</h5>
          <TextareaAutosize
            rowsMin={7}
            space
            name="discription"
            value={post.description}
            placeholder="Write something awesome..."
            className={classes.textarea}
            onChange={(e) => handleChange(e)}
          />
        </Box>

        <Button
          onClick={() => updateBlogPost()}
          variant="contained"
          color="primary"
        >
          Update
        </Button>
      </FormControl>
    </Box>
  );
};

export default Update;
