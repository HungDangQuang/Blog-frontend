import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
export const SidebarData = [
  {
    title: "Post",
    path: "/admin",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Comment",
    path: "/comment",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "User",
    path: "/user",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
];
