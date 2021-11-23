import React from "react";
import { Stack, Avatar, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import editFill from "@iconify/icons-eva/edit-fill";
import { Link as RouterLink } from "react-router-dom";
import trash2Outline from "@iconify/icons-eva/trash-2-outline";
import moreVerticalFill from "@iconify/icons-eva/more-vertical-fill";
// material
import {
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const Postmenu = ({ posts, handleEditClick, handleDeleteClick }) => {
  return (
    <>
      <ListItemIcon onClick={(event) => handleEditClick(event, posts)}>
        <Icon icon={editFill} width={24} height={24} />
      </ListItemIcon>
      <ListItemIcon onClick={() => handleDeleteClick(posts._id)}>
        <Icon icon={trash2Outline} width={24} height={24} />
      </ListItemIcon>
    </>
  );
};

export default Postmenu;
