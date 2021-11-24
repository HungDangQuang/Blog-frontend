import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
export const SidebarData = [
  {
    title: "List post",
    path: "",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
    subNav: [
      {
        title: "Posts",
        path: "/admin",
        icon: <IoIcons.IoIosPaper />,
      },

      {
        title: "Create post",
        path: "/create",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Comments",
    path: "/comment",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
];
