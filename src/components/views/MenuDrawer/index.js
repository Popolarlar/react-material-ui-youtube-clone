import React from "react";
import { Link } from "react-router-dom";
import { Drawer, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "./../../../assets/yt_logo_rgb_light.png";

// Custom styles
import { withStyles } from "@material-ui/core";
import style from "./style";

// Components
import SideBar from "./../Home/_components/SideBar";
import MenuLogo from "./../Header/_components/MenuLogo";

const MenuDrawer = ({ classes, drawerOpen, toggleDrawer }) => {
  return (
    <Drawer
      className={classes.root}
      variant="temporary"
      anchor="left"
      open={drawerOpen}
      onClose={toggleDrawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <MenuLogo toggleDrawer={toggleDrawer} />
      <SideBar />
    </Drawer>
  );
};

export default withStyles(style)(MenuDrawer);
