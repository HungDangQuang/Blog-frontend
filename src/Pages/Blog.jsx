import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

// Component
import BlogLayout from "../containers/Blog";
import Header from "../components/header/Index";
import Navigation from "../components/navigation/Index";
import Banner from "../components/banner/Index";
import Title from "../components/title/Index";
const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundImage: `url(${"https://images.unsplash.com/photo-1601662528567-526cd06f6582?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"})`,
  },
  container: {
    margin: "0 10px",
    backgroundColor: "#fff",
  },
  space: {
    margin: "0 70px",
  },
});

const Blog = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.container}>
          <Header />
          <Box className={classes.space}>
            <Title />
            <Navigation />
            <Banner />
            <BlogLayout />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Blog;
