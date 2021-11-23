import React from "react";
import { Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styleHeader from "./style";

const useStyles = makeStyles(styleHeader);

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Typography variant="h1">Blog</Typography>
      </Box>
    </>
  );
};

export default Header;
