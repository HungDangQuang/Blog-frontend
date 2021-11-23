import React from "react";
import {
  Box,
  makeStyles,
  TextareaAutosize,
  Button,
  FormControl,
  InputBase,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container_con: {
    margin: "0 95px",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  image: {
    width: "100%",
    height: "60vh",
    objectFit: "cover",
    marginTop: 100,
    borderRadius: 5,
  },
  title: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px dashed #000000",
    borderRadius: "5px",
  },
  textfield: {
    width: "100%",
    height: "50px",
    padding: "5px",
    borderRadius: "5px",
    border: "1px solid #000000",
    position: "static",
    backgroundColor: "#ffff",
    fontSize: 25,
    "&:hover": {
      border: "1px solid #000000",
    },
  },
  textarea: {
    width: "100%",
    fontSize: 16,
    padding: "5px",
    border: "1px solid #000000",
    borderRadius: "5px",
    "&:focus-visible": {
      outline: "none",
    },
  },
  content_con: {
    display: "flex",
    height: "500px",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "end",
    margin: "0 60px",
  },
}));

const Contact = () => {
  const classes = useStyle();

  return (
    <Box className={classes.container_con}>
      <Box className={classes.content_con}>
        <Box style={{ width: "100%", marginTop: 50, paddingTop: 20 }}>
          <h6> Username</h6>
          <InputBase name="title" className={classes.textfield} />
        </Box>
        <Box style={{ width: "100%", paddingTop: 10 }}>
          <h6> Phone</h6>
          <InputBase name="title" className={classes.textfield} />
        </Box>
        <Box style={{ width: "100%", paddingTop: 10 }}>
          <h6> Email</h6>
          <InputBase name="title" className={classes.textfield} />
        </Box>
        <Box style={{ width: "100%", paddingTop: 10 }}>
          <h6>Write Message</h6>
          <TextareaAutosize
            rowsMin={7}
            space
            placeholder="Write something awesome..."
            className={classes.textarea}
            name="description"
          />
        </Box>

        <Button xs={{ marginTop: "10px" }} variant="contained" color="primary">
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
