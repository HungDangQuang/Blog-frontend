import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import logo from "../../../assets/images/logo.png";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

export default function PrimarySearchAppBar() {
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("blogID");
    window.location.href = "/admin/login";
  };

  const menuId = "primary-search-account-menu";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{
          backgroundColor: "rgb(51, 54, 52)",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <Toolbar>
          <Avatar alt="Remy Sharp" src={logo} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block", marginLeft: 10 } }}
          >
            Administrators
          </Typography>
          <Box sx={{ flexGrow: 1 }} />

          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleLogout}
            color="inherit"
          >
            <ExitToAppOutlinedIcon />
          </IconButton>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              onClick={handleLogout}
            >
              <ExitToAppOutlinedIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
