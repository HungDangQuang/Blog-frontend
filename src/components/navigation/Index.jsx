import { Toolbar, makeStyles } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import Categories from "../blog/Category";
import { IoMdArrowDropdown } from "react-icons/io";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import "../../style/container.css";
import Avatar from "@mui/material/Avatar";
const naviStyle = makeStyles({
  component: {
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
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
  info: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: 170,
    height: 64,
    marginLeft: 15,
    marginRight: "209px",
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
      <Link to="/home">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </Link>
      Hello! {user.username}
    </div>
  ) : (
    <div className={classes.info}></div>
  );

  const button = user.isLogin ? (
    <Button
      onClick={logout}
      style={{
        background: "unset",
        border: "none",
        fontSize: 16,
        fontFamily: "Roboto",
        cursor: "pointer",
        opacity: 0.8,
      }}
    >
      Logout
    </Button>
  ) : (
    <Button
      style={{
        background: "unset",
        border: "none",
        fontSize: 16,
        fontFamily: "Roboto",
        cursor: "pointer",
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
          <div>{button}</div>
        </Toolbar>
      </div>
    </div>
  );
};

export default Navigation;
