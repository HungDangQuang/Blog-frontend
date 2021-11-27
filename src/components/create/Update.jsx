import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  makeStyles,
  TextareaAutosize,
  Button,
  InputBase,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Notification from "../alertMessage/index";
import { updatePost, getOnePost } from "../../apis/productApi";
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
  username: "admin",
  categories: "",
  createdDate: new Date(),
};

const Update = () => {
  const classes = useStyle();
  const navigation = useNavigate();
  const [loading, setLoading] = useState(false);

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const { id } = useParams();

  const [post, setPost] = useState(initialPost);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getOnePost(id);
      setPost(data.data);
    };
    fetchData();
  }, [id]);

  console.log(localStorage.getItem("blogToken"));
  console.log(post);

  const updateBlogPost = async () => {
    setLoading(true);
    setNotify({
      isOpen: true,
      message: "Create Successfully",
      type: "success",
    });
    await updatePost(id, post);
    setLoading(false);
    setTimeout(() => {
      navigation("/admin");
    });
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
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
              value={post.title}
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
            value={post.picture}
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
            value={post.description}
            onChange={(e) => handleChange(e)}
          />
        </Box>

        <Button
          onClick={() => updateBlogPost()}
          xs={{ marginTop: "10px" }}
          variant="contained"
          color="primary"
          endIcon={
            loading && <ReactBootStrap.Spinner animation="border" size="sm" />
          }
        >
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default Update;
