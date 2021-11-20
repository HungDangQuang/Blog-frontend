import React from "react";
import { Toolbar, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

import styleHeader from "./style";
import headerCofig from "../../config/headerConfig";
import Search from "./Search";
const useStyles = makeStyles(styleHeader);

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Toolbar className>
          {headerCofig.map((option) => {
            return (
              <Typography className={classes.navi}>{option.title}</Typography>
            );
          })}
          <Box className={classes.search}>
            <Search />
          </Box>
        </Toolbar>
      </Box>
    </>
  );
};

export default Header;
