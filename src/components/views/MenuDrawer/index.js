import React from "react";
import { Drawer } from "@material-ui/core";

// Custom styles
import { withStyles } from "@material-ui/core";
import style from "./style";

// Components
import SideBar from "./../ResponsiveMenu/_components/SideBar";
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
      <SideBar toggleDrawer={toggleDrawer} />
    </Drawer>
  );
};

export default withStyles(style)(MenuDrawer);
