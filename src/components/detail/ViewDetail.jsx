import { useState, useEffect, useContext } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { getOnePost, deletePost, updatePost } from "../../apis/productApi";

// import { LoginContext } from "../../context/ContextProvider";

//components
// import Comments from "./comments/Comments";

const useStyle = makeStyles((theme) => ({
  container: {
    margin: "50px 100px",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  image: {
    width: "100%",
    height: "50vh",
    objectFit: "cover",
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
    fontSize: 38,
    fontWeight: 600,
    textAlign: "center",
    margin: "50px 0 10px 0",
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

const ViewDetail = ({ match }) => {
  const classes = useStyle();
  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
  const navigation = useNavigate();

  const [post, setPost] = useState({});
  // const { account, setAccount } = useContext("");

  useEffect(() => {
    const fetchData = async () => {
      // let data = await getOnePost(match._id);
      setPost();
    };
    fetchData();
    // console.log(account, post.username);
  }, []);

  const deleteBlog = async () => {
    await deletePost(post._id);
    navigation("/");
  };

  return (
    <Box className={classes.container}>
      <img src={url} alt="post" className={classes.image} />
      <Box className={classes.icons}>
        {post && (
          <>
            <Link to={"#"}>
              <Edit className={classes.icon} color="primary" />
            </Link>
            <Link>
              <Delete
                onClick={() => deleteBlog()}
                className={classes.icon}
                color="error"
              />
            </Link>
          </>
        )}
      </Box>
      <Typography className={classes.heading}></Typography>

      <Box className={classes.color}>
        <Link to={"#"} className={classes.link}>
          <Typography>
            Author: <span style={{ fontWeight: 600 }}></span>
          </Typography>
        </Link>
        <Typography style={{ marginLeft: "auto" }}>
          {/* {new Date(post.createAt).toDateString()} */}
        </Typography>
      </Box>

      <Typography className={classes.detail}></Typography>
      {/* <Comments post={post} /> */}
    </Box>
  );
};

export default ViewDetail;
