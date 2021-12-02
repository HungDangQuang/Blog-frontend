import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPosts } from "../../apis/productApi";
//components
import Card from "../card/Index";
import Pagination from "../../containers/Pagination";

const Posts = () => {
  const [posts, getPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getAllPosts(); // params in url
      getPosts(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          backgroundColor: "#f4f7f6",
          border: "none",
          position: "static",
        }}
      >
        {currentPosts.length ? (
          currentPosts.map((post) => (
            <Link
              key={post._id}
              style={{ textDecoration: "none", color: "inherit" }}
              to={`details/${post._id}`}
            >
              <Card post={post} />
            </Link>
          ))
        ) : (
          <div style={{ color: "878787", margin: "100px 50px", fontSize: 15 }}>
            No data is available for selected category
          </div>
        )}
      </div>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </>
  );
};

export default React.memo(Posts);
