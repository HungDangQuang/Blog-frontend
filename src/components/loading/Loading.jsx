import { makeStyles } from "@mui/styles";
import React from "react";
import loadingStyle from "./style";
import LoadingGif from "../../assets/images/loading.gif";

const useStyles = makeStyles(loadingStyle);

const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.image}>
        <img className={classes.icon} src={LoadingGif} alt="" />
      </div>
    </div>
  );
};

export default Loading;
