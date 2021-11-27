import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
// Component
import Posts from "../components/blog/Posts";
import Navigation from "../components/navigation/Index";
import Banner from "../components/banner/Index";
import Footer from "../components/footer/Index";
import "../style/container.css";
import { useSelector } from "react-redux";
const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${"https://images.unsplash.com/photo-1601662528567-526cd06f6582?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"})`,
  },
  container_blog: {
    margin: "0 20px",
    backgroundColor: "#F4F7F6",
  },
});

const Blog = () => {
  const user = useSelector((state) => state.user);
  console.log(user);

  const classes = useStyles();

  return (
    <>
      <Navigation />
      <Box className={classes.root}>
        <Box className={classes.container_blog}>
          <Banner />
          <div className="blog">
            <h2>All Posts</h2>
            <div className="card">
              <Posts />
            </div>
          </div>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default React.memo(Blog);
