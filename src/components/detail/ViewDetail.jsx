import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import { getOnePost } from "../../apis/productApi";
import Comments from "./comment/Comments";
//components
import "../../style/container.css";

const ViewDetail = () => {
  const [post, setPost] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let res = await getOnePost(id);
      setPost(res.data);
    };
    fetchData();
  }, [id]);

  return (
    <div className="containerDetail">
      <h1 className="headingDetail">{post.title}</h1>

      <img src={post.picture} alt="post" className="imageDetail" />

      <div className="authorDetail">
        <Link to={`/?username=${post.username}?`} className="linklink">
          <h6>
            Author: <span style={{ fontWeight: 600 }}>{post.username}</span>
          </h6>
        </Link>
        <h6 style={{ marginLeft: "auto" }}>
          {new Date(post.createdDate).toDateString()}
        </h6>
      </div>
      <div className="detailPost">
        <Typography>{post.description}</Typography>
      </div>
      <Comments post={post} />
    </div>
  );
};
export default React.memo(ViewDetail);
