import React from "react";

// Component
import Posts from "../components/blog/Posts";
import Navigation from "../components/navigation/Index";
import Banner from "../components/banner/Index";
import Footer from "../components/footer/Index";
import "../style/container.css";
import { useSelector } from "react-redux";

const Blog = () => {
  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <>
      <Navigation />
      <div className="wrapTotle">
        <div className="container_blog">
          <Banner />

          <div className="blog_haah">
            <h2>All Posts</h2>
            <div className="card_body">
              <Posts />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default React.memo(Blog);
