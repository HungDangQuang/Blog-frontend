import { Grid } from "@material-ui/core";
//components
import Categories from "../components/blog/Category.jsx";
import Posts from "../components/blog/Posts";

const Blog = () => {
  return (
    <Grid container>
      <Grid container item xs={12} sm={10} lg={30}>
        <Posts />
      </Grid>
      <Grid item lg={2} xs={100} sm={2}>
        <Categories />
      </Grid>
    </Grid>
  );
};

export default Blog;
