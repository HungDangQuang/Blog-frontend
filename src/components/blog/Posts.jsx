import { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getAllPosts } from "../../apis/productApi";
//components
import Card from "../card/Index";

const Posts = () => {
  const [posts, getPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await getAllPosts(); // params in url
      getPosts(data);
    };
    fetchData();
  }, []);

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
        <Box style={{ color: "878787", margin: "30px 80px", fontSize: 15 }}>
          No data is available for selected category
        </Box>
      )}
    </>
  );
};

export default Posts;
