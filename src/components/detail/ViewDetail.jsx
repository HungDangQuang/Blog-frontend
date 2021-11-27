import React, { useState, useEffect } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import { getOnePost } from "../../apis/productApi";
import Comments from "./comment/Comments";
//components

const useStyle = makeStyles((theme) => ({
  container: {
    margin: "50px 100px",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  image: {
    width: "100%",
    height: "60vh",
    objectFit: "cover",
    marginTop: 20,
    borderRadius: 5,
  },
  icons: {
    float: "right",
  },
  icon: {
    margin: 5,
    padding: 5,
    border: "1px solid #878787",
    borderRadius: 10,
  },
  heading: {
    marginTop: 100,
    fontSize: 38,
    fontWeight: 600,
    textAlign: "center",
    margin: "70px 0 10px 0",
  },
  author: {
    color: "#878787",
    display: "flex",
    margin: "20px 0",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const ViewDetail = () => {
  const classes = useStyle();

  const [post, setPost] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let res = await getOnePost(id);
      setPost(res.data);
    };
    fetchData();
  }, [id]);

  return (
    <Box className={classes.container}>
      <Typography className={classes.heading}>{post.title}</Typography>

      <img src={post.picture} alt="post" className={classes.image} />

      <Box className={classes.author}>
        <Link to={`/?username=${post.username}?`} className={classes.link}>
          <Typography>
            Author: <span style={{ fontWeight: 600 }}>{post.username}</span>
          </Typography>
        </Link>
        <Typography style={{ marginLeft: "auto" }}>
          {new Date(post.createdDate).toDateString()}
        </Typography>
      </Box>

      <Typography className={classes.detail}>{post.description}</Typography>
      <Comments post={post} />
    </Box>
  );
};
export default React.memo(ViewDetail);
