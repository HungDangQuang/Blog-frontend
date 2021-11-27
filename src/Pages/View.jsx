import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
//Component
import Navigation from "../components/navigation/Index";
import ViewDetail from "../components/detail/ViewDetail";
const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundImage: `url(${"https://images.unsplash.com/photo-1601662528567-526cd06f6582?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"})`,
  },
  container: {
    margin: "0 10px",
    backgroundColor: "#fff",
  },
  space: {
    margin: "0 70px",
  },
});

const View = () => {
  const classes = useStyles();

  return (
    <>
      <Navigation />
      <Box className={classes.root}>
        <Box className={classes.container}>
          <Box className={classes.space}>
            <ViewDetail />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default React.memo(View);
