import { useState, useEffect } from "react";
import { Box, TextareaAutosize, Button, makeStyles } from "@material-ui/core";

import { createComment, getAllComment } from "../../../apis/commentApi";

//components
import Comment from "./Comment";

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

  const [comment, setComment] = useState(initialValue);
  const [comments, setComments] = useState([]);
  const [data, setData] = useState();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await getAllComment();
      setComments(response);
      console.log(response);
    };
    getData();
  }, [toggle, post]);

  console.log(comment);

  const handleChange = (e) => {
    setComment({
      name: post.username,
      postID: post._id,
      date: new Date(),
      comment: e.target.value,
    });
    setData(e.target.value);
  };

  const addComment = async () => {
    await createComment(comment);
    setData("");
    setToggle((prev) => !prev);
  };

  return (
    <Box>
      <h4 style={{ marginTop: 50, fontWeight: 1000 }}>Comment</h4>
      <Box className={classes.container}>
        <TextareaAutosize
          rowsMin={2}
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
          Post
        </Button>
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
