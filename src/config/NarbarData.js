import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
export const SidebarData = [
  {
    title: "POST",
    path: "/admin",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "COMMENT",
    path: "/comment",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "USER",
    path: "/user",
    icon: <FaUserAlt />,
    cName: "nav-text",
  },
];
