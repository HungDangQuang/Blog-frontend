import { Grid } from "@material-ui/core";
import { Box } from "@mui/material";
//components
import Categories from "../components/blog/Category.jsx";
// import Posts from "../components/blog/Posts";
import Post from "../components/blog/Post";

const Blog = () => {
  return (
    <Box style={{ border: "1px solid #ccc" }}>
      <Box style={{ display: "flex", marginTop: "100px" }}>
        <Post />
        <Categories />
      </Box>
    </Box>
  );
};

export default Blog;
