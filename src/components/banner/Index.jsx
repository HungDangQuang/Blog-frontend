import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyle = makeStyles({
  image: {
    width: "100%",
    background: `url(${"https://media.istockphoto.com/photos/retro-blog-bookshelf-with-cozy-interior-picture-id1146554418?b=1&k=20&m=1146554418&s=170667a&w=0&h=OKcK6RlNkwYU4y1xba-hEcXM3IA7itp2pYKDGDT6KAI="}) center/55% repeat-x #000`,
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& :first-child": {
      fontSize: 70,
      color: "#FFFFFF",
      lineHeight: 1,
    },
    "& :last-child": {
      fontSize: 20,
      background: "#FFFFFF",
    },
  },
});

const Banner = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.image}>
        <Typography style={{ fontFamily: "Josefin Sans" }}>BLOG</Typography>
        <Typography style={{ borderRadius: 5, padding: 5 }}>
          Code for Interview
        </Typography>
      </Box>
    </>
  );
};

export default Banner;
