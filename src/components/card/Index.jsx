import { makeStyles, Box, Typography, Hidden } from "@material-ui/core";

const useStyle = makeStyles({
  container_card: {
    margin: 10,
    height: 380,
    overflow: "hiden",
    backgroundColor: "#fcfcfc",
    "&:hover": {
      boxShadow: "5px 10px 8px #888888",
    },
  },
  content_card: {
    padding: 20,
  },
  image: {
    padding: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  textColor: {
    textAlign: "center",
    color: "#878787",
    fontSize: 12,
  },
  heading: {
    fontSize: 18,
    fontWeight: 600,
  },
  detail: {
    fontSize: 14,
    wordBreak: "break-word",
  },
});

const Card = ({ post }) => {
  const classes = useStyle();
  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";

  const addEllipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };

  return (
    <Box className={classes.container_card}>
      <Box style={{ width: "100%", height: 220 }}>
        <img src={url} alt="post" className={classes.image} />
      </Box>
      <Box className={classes.content_card}>
        <Typography className={classes.textColor}>{post.categories}</Typography>
        <Typography className={classes.heading}>
          {addEllipsis(post.title, 50)}
        </Typography>

        <Typography className={classes.detail}>
          {addEllipsis(post.description, 100)}
        </Typography>
      </Box>
    </Box>
  );
};

export default Card;
