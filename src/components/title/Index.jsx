import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography, Box } from "@mui/material";
const titleStyle = makeStyles({
  logo: {
    padding: "3rem !important",
    width: "100%",
    height: "170px",
  },
});

const Title = () => {
  const classes = titleStyle();

  return (
    <Typography
      className={classes.logo}
      variant="h1"
      component="h2"
      align="center"
      style={{ fontFamily: `${"Josefin Sans"},${"Segoe UI"}` }}
      fontSize="90px"
    >
      Blog
    </Typography>
  );
};

export default Title;
