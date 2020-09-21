import React, { useState } from "react";

// Custom styles
import { withStyles } from "@material-ui/core";
import style from "./style";

// Components
import MenuDrawer from "./../../views/MenuDrawer";
import Header from "./../../views/Header";

const VideoLayout = ({ classes, children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuExpand, setMenuExpand] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleMenuExpand = () => {
    setMenuExpand(!menuExpand);
  };

  return (
    <div className={classes.root}>
      <Header toggleDrawer={toggleDrawer} toggleMenuExpand={toggleMenuExpand} />
      <nav>
        <MenuDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      </nav>

      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default withStyles(style)(VideoLayout);
