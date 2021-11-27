import Aboutme from "../components/about/Index";
import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Navigation from "../components/navigation/Index";
import Footer from "../components/footer/Index";
import "../style/container.css";
import about from "../assets/images/about.jpeg";
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  getmeabout: {
    backgroundImage: `url(${about})`,
    margin: "0 20px",
    backgroundColor: "#F4F7F6",
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Navigation />
      <Box className={classes.root}>
        <Box className={classes.getmeabout}>
          <div className="blog">
            <Aboutme />
          </div>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default About;
