import { Toolbar, makeStyles } from "@material-ui/core";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import "../../style/container.css";
import Avatar from "@mui/material/Avatar";
import logo from "../../assets/images/logo.png";

const naviStyle = makeStyles({
  component: {
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    background: "#FFFFFF",
    width: "100%",
    height: "70px",
    borderBottom: "1px solid #ccc",
    color: "black",
  },
  container: {
    justifyContent: "center",
    background: "#FFFFFF",
    with: "100%",
    height: "100%",
    "&  >*": {
      padding: 20,
      color: "black",
      textDecoration: "none",
    },
  },
  info: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: 90,
    fontFamily: "Lobster",
    fontWeight: 1000,
    height: 64,
    marginLeft: 15,
    marginRight: 307,
  },
  colorNar: {
    fontWeight: 1000,
    fontFamily: `${"Roboto"}, sans-serif`,
  },
});

const Navigation = () => {
  const classes = naviStyle();
  const navigation = useNavigate();

  const login = async () => navigation("/login");

  const logout = async () => {
    localStorage.removeItem("blogID");
    localStorage.removeItem("blogToken");
    navigation("/login");
  };

  const user = useSelector((state) => state.user);

  const info = user.isLogin ? (
    <div className={classes.info}>
      <Link to="/">
        <Avatar alt="Remy Sharp" src={logo} />
      </Link>
      {user.username}
    </div>
  ) : (
    <div className={classes.info}>
      <Link to="/">
        <Avatar alt="Remy Sharp" src={logo} />
      </Link>
    </div>
  );

  const button = user.isLogin ? (
    <Button
      onClick={logout}
      style={{
        background: "unset",
        color: "#000000",
        fontSize: 16,
        fontFamily: `${"Roboto"}, sans-serif`,
        cursor: "pointer",
        opacity: 0.8,
        border: "1px solid #ccc",
      }}
    >
      Logout
    </Button>
  ) : (
    <Button
      style={{
        background: "unset",
        fontSize: 16,
        fontFamily: `${"Roboto"}, sans-serif`,
        cursor: "pointer",
        color: "#000000",
        border: "1px solid #ccc",
        opacity: 0.8,
      }}
      onClick={login}
    >
      Login
    </Button>
  );
  return (
    <div className={classes.component}>
      {info}
      <div>
        <Toolbar className={classes.container}>
          <Link className={classes.colorNar} to="/">
            HOME
          </Link>
          <Link className={classes.colorNar} to="/about">
            ABOUT
          </Link>
          <Link className={classes.colorNar} to="/contact">
            CONTACT
          </Link>
          <div>{button}</div>
        </Toolbar>
      </div>
    </div>
  );
};

export default Navigation;
