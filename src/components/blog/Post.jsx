import { PropTypes } from "prop-types";
import Card from "../card/Index";

const Post = ({ post }) => {
  const url =
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";

  // const addEllipsis = (str, limit) => {
  //   return str.length > limit ? str.substring(0, limit) + "..." : str;
  // };

  return (
    <>
      <Card />
    </>
  );
};

Post.propTypes = {
  post: PropTypes.func,
};

export default Post;
