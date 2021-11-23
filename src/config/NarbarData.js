import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "List post",
    path: "/admin",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Create post",
    path: "/create",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
];
