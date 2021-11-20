import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const naviStyle = makeStyles({
  component: {
    background: "#FFFFFF",
    color: "black",
  },
  container: {
    justifyContent: "center",
    borderBottom: "1px solid #ccc",
    marginBottom: "35px",
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

  const user = useSelector((state) => state.user);

  const login = async () => (window.location.href = "/login");

  const button = user.email ? (
    <Button
      style={{
        background: "unset",
        border: "none",
        fontSize: 17,
        textTransform: "uppercase",
        fontFamily: "Roboto",
        cursor: "pointer",
        opacity: 0.8,
      }}
    >
      Logout
    </Button>
  ) : (
    <Button onClick={login}>Login</Button>
  );

  return (
    <div className={classes.component}>
      <Toolbar className={classes.container}>
        <Link to="#">HOME</Link>
        <Link to="#">ABOUT</Link>
        <Link to="#">CONTACT</Link>
        <Link to="#">{button}</Link>
      </Toolbar>
    </div>
  );
};

export default Navigation;
