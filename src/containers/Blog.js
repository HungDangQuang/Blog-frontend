import { Grid } from "@material-ui/core";

//components
import Banner from "../components/banner/Index.jsx";
import Categories from "../components/blog/Category.jsx";
import Posts from "../components/blog/Posts";
import Navigation from "../components/navigation/Index.jsx";

const Blog = () => {
  return (
    <>
      <Navigation />
      <Banner />
      <Grid container>
        <Grid container item xs={12} sm={10} lg={10}>
          <Posts />
        </Grid>
        <Grid item lg={2} xs={12} sm={2}>
          <Categories />
        </Grid>
      </Grid>
    </>
  );
};

export default Blog;
