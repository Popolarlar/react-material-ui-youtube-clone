import React from "react";

// Custom styles
import { withStyles } from "@material-ui/core";
import style from "./style";

// Components
import { Drawer } from "@material-ui/core";
import MiniSideBar from "./../MiniSideBar";
import SideBar from "./../SideBar";

const ResponsiveMenu = ({ classes, menuExpand }) => {
  return (
    <div className={classes.root}>
      <Drawer
        classes={{
          paper: menuExpand ? classes.sideBarPaper : classes.miniSideBarPaper,
        }}
        variant="permanent"
        open
      >
        {menuExpand ? <SideBar /> : <MiniSideBar />}
      </Drawer>
    </div>
  );
};

export default withStyles(style)(ResponsiveMenu);
