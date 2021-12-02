import { Typography } from "@material-ui/core";
import React from "react";
import "../../style/card.css";

const Card = ({ post }) => {
  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";

  const addEllipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };

  return (
    <div className="container_card">
      <div style={{ width: "100%", height: 220 }}>
        <img src={url} alt="post" className="image_Card" />
      </div>
      <div className="content_card">
        <p className="textColor">{post.createdDate}</p>
        <h4 className="heading">{addEllipsis(post.title, 50)}</h4>

        <p className="detail">{addEllipsis(post.description, 100)}</p>
      </div>
    </div>
  );
};

export default Card;
