import { useEffect, useState } from "react";
import { Grid, Box } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { getAllPosts } from "../../apis/productApi";
//components
import Card from "../card/Index";

const Posts = () => {
  const [posts, getPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      let data = await getAllPosts(search); // params in url
      getPosts(data);
    };
    fetchData();
  }, [search]);

  return (
    <>
      {posts.length ? (
        posts.map((post) => (
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`details/${post._id}`}
          >
            <Card post={post} />
          </Link>
        ))
      ) : (
        <Box style={{ color: "878787", margin: "30px 80px", fontSize: 18 }}>
          No data is available for selected category
        </Box>
      )}
    </>
  );
};

export default Posts;
