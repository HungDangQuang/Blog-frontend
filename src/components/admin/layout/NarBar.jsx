import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "../../../config/NarbarData";
import { IconContext } from "react-icons";
import SubMenu from "./Submenu";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  Nav: {
    background: "#15171c",
    height: "200px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  NavIcon: {
    marginLeft: "2rem",
    fontSize: "2rem",
    height: "80px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  SidebarNav: {
    background: "rgb(51, 54, 52)",
    width: "250px",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    left: `${({ sidebar }) => (sidebar ? "0" : "-100%")}`,
    transition: "350ms",
    zIndex: 10,
  },
  SidebarWrap: {
    width: "100%",
  },
}));

const Navbar = () => {
  const classes = useStyle();

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className={classes.Nav}>
          <Link className={classes.NavIcon} to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={classes.SidebarNav} sidebar={sidebar}>
          <div className={classes.SidebarWrap}>
            <Link className={classes.NavIcon} to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
