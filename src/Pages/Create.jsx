import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
//Component
import CreatePost from "../components/create/createPost";
import Header from "../components/header/Index";
import Title from "../components/title/Index";
import Navigation from "../components/navigation/Index";

const createStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${"https://images.unsplash.com/photo-1601662528567-526cd06f6582?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"})`,
  },
  container: {
    height: "100%",
    margin: "0 10px",
    backgroundColor: "#fff",
  },
  space: {
    margin: "0 70px",
  },
});

const Create = () => {
  const classes = createStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Box className={classes.space}>
          <Title />
          <Navigation />
          <CreatePost />
        </Box>
      </Box>
    </Box>
  );
};
export default Create;
