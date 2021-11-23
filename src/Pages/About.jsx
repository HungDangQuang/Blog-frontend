import Aboutme from "../components/about/Index";

import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Navigation from "../components/navigation/Index";
import Footer from "../components/footer/Index";
import "../style/container.css";
const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundImage: `url(${"https://images.unsplash.com/photo-1601662528567-526cd06f6582?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"})`,
  },
  container_blog: {
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
        <Box className={classes.container_blog}>
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
