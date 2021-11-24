import { Typography, Box, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  component: {
    marginTop: 30,
    background: "#F5F5F5",
    padding: 10,
  },
  container: {
    display: "flex",
    marginBottom: 5,
  },
  name: {
    fontWeight: 600,
    fontSize: 16,
    color: "rgb(209, 209, 25)",
    marginRight: 20,
  },
  date: {
    fontSize: 14,
    color: "#878787",
  },
  delete: {
    marginLeft: "auto",
  },
});

const Comment = ({ comment, setToggle }) => {
  const classes = useStyles();

  return (
    <Box className={classes.component}>
      <Box className={classes.container}>
        <Typography className={classes.name}>{comment.name}</Typography>
        <Typography className={classes.date}>
          {new Date(comment.date).toDateString()}
        </Typography>
      </Box>
      <Typography style={{ marginLeft: 71 }}>{comment.comment}</Typography>
    </Box>
  );
};

export default Comment;
