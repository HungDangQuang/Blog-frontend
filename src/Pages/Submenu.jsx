import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  SidebarLink: {
    display: "flex",
    color: "#e1e9fc",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    listStyle: "none",
    height: "60px",
    textDecoration: "none",
    fontSize: "16px",
    fontFamily: "Inconsolata",
    "&:hover": {
      background: "#252831",
      borderLeft: "5px solid rgb(235, 240, 237)",
      textDecoration: "none",
      cursor: "pointer",
      color: "#e1e9fc",
    },
  },
  SidebarLabel: {
    marginLeft: "16px",
  },

  DropdownLink: {
    background: " #414757",
    height: "60px",
    paddingLeft: "3.5rem",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "rgb(235, 240, 237)",
    fontSize: "15px",
    "&:hover": {
      background: "rgb(235, 240, 237)",
      textDecoration: "none",
      cursor: "pointer",
      borderLeft: "5px solid rgb(0, 0, 0)",
    },
  },
}));

const SubMenu = ({ item }) => {
  const classes = useStyle();

  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <Link
        className={classes.SidebarLink}
        to={item.path}
        onClick={item.subNav && showSubnav}
      >
        <div>
          {item.icon}
          <span className={classes.SidebarLabel}>{item.title}</span>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </Link>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link className={classes.DropdownLink} to={item.path} key={index}>
              {item.icon}
              <span className={classes.SidebarLabel}>{item.title}</span>
            </Link>
          );
        })}
    </>
  );
};

export default SubMenu;
