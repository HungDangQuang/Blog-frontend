import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Categories from "../blog/Category";
import { IoMdArrowDropdown } from "react-icons/io";

import "../../style/container.css";
const naviStyle = makeStyles({
  component: {
    position: "fixed",
    top: 0,
    left: 0,
    background: "#FFFFFF",
    width: "100%",
    color: "black",
  },
  container: {
    justifyContent: "center",
    borderBottom: "1px solid #ccc",
    height: "50px",
    "&  >*": {
      padding: 20,
      color: "black",
      textDecoration: "none",
    },
  },
});

const Navigation = () => {
  const classes = naviStyle();

  return (
    <div className={classes.component}>
      <Toolbar className={classes.container}>
        <Link to="/">HOME</Link>
        <div className="dropdown">
          <Link to="" style={{ color: "#000000" }}>
            CATEGORY
            <IoMdArrowDropdown />
          </Link>
          <div className="dropdown-content">
            <Categories />
          </div>
        </div>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </Toolbar>
    </div>
  );
};

export default Navigation;
