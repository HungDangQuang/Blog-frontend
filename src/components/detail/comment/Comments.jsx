import { useState, useEffect } from "react";
import { Box, TextareaAutosize, Button, makeStyles } from "@material-ui/core";
import React from "react";
import { createComment, getCommentsPost } from "../../../apis/commentApi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//components
import Comment from "./Comment";
import ConfirmDialog from "../../alertMessage/ConfirmDialog";
const useStyles = makeStyles({
  container: {
    marginTop: 40,
    display: "flex",
    "& > *": {
      // padding: '10px '
    },
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: "50%",
  },
  textarea: {
    height: 100,
    width: "100%",
    margin: "0 20px",
  },
  button: {
    height: 40,
  },
});

const initialValue = {
  name: "",
  postID: "",
  date: new Date(),
  comment: "",
};

const Comments = ({ post }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const [comment, setComment] = useState(initialValue);
  const [comments, setComments] = useState([]);
  const [data, setData] = useState();
  const [toggle, setToggle] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  useEffect(() => {
    const getData = async () => {
      const response = await getCommentsPost(post._id);
      setComments(response);
      console.log(response);
    };
    getData();
  }, [toggle, user]);

  const handleChange = (e) => {
    setComment({
      name: user.username,
      postID: post._id,
      date: new Date(),
      comment: e.target.value,
    });
    setData(e.target.value);
  };

  console.log(comment);
  const addComment = async () => {
    await createComment(comment);
    setData("");
    setToggle((prev) => !prev);
  };

  const handleLogin = () => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    navigate("/login");
  };

  const buttonComment = user.isLogin ? (
    <Button
      variant="contained"
      color="rgb(53, 219, 44)"
      size="medium"
      className={classes.button}
      onClick={(e) => addComment(e)}
    >
      Post
    </Button>
  ) : (
    <Button
      variant="contained"
      color="rgb(53, 219, 44)"
      size="medium"
      className={classes.button}
      s
      onClick={() => {
        setConfirmDialog({
          isOpen: true,
          title: "Please login before commenting !",
          subTitle: `Click ${"Yes"} to login`,
          onConfirm: () => {
            handleLogin();
          },
        });
      }}
    >
      Post
    </Button>
  );

  return (
    <Box>
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />

      <h4 style={{ marginTop: 50, fontWeight: 1000 }}>Comment</h4>
      <Box className={classes.container}>
        <TextareaAutosize
          rowsMin={2}
          className={classes.textarea}
          placeholder="what's on your mind?"
          onChange={(e) => handleChange(e)}
          value={data}
        />
        {buttonComment}
      </Box>
      <Box>
        {comments &&
          comments.map((comment) => (
            <Comment comment={comment} setToggle={setToggle} />
          ))}
      </Box>
    </Box>
  );
};

export default Comments;
