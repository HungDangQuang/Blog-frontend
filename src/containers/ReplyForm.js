import React, { useState } from "react";
import { useParams } from "react-router";
import { createComment } from "../apis/commentApi";
import { Box, TextareaAutosize, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
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
  username: "",
  postID: "",
  date: new Date(),
  comment: "",
};

const ReplyForm = ({ post }) => {
  const classes = useStyles();
  const { id } = useParams();

  const [comment, setComment] = useState(initialValue);
  const [data, setData] = useState();

  const handleChange = (e) => {
    setComment({
      username: "Admin",
      postID: post._id,
      date: new Date(),
      comment: e.target.value,
    });
    setData(e.target.value);
  };

  const addComment = async () => {
    await createComment(comment);
    setData("");
  };
  return (
    <Box className={classes.container}>
      <TextareaAutosize
        rowsMin={1.5}
        className={classes.textarea}
        placeholder="what's on your mind?"
        onChange={(e) => handleChange(e)}
        value={data}
      />
      <Button
        variant="contained"
        color="rgb(53, 219, 44)"
        size="medium"
        className={classes.button}
        onClick={(e) => addComment(e)}
      >
        Reply
      </Button>
    </Box>
  );
};

export default ReplyForm;
