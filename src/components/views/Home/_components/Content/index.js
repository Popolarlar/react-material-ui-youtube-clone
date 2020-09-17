import React from "react";

// Custom styles
import { withStyles } from "@material-ui/core";
import style from "./style";

import { Divider, Hidden } from "@material-ui/core";
import ChipBar from "./../ChipBar";
import VideoGrid from "./../VideoGrid/VideoGridContainer";
import ResponsiveMenu from "./../ResponsiveMenu";

const Content = ({ classes, menuExpand }) => {
  return (
    <div className={classes.root}>
      <Hidden xsDown>
        <nav className={menuExpand ? classes.navExpand : classes.nav}>
          <ResponsiveMenu menuExpand={menuExpand} />
        </nav>
      </Hidden>

      <main className={classes.main}>
        <Divider />
        <ChipBar />
        <Divider />
        <div>
          <VideoGrid source="highLight" />
          <Divider />
          <VideoGrid source="news" title="Breaking news" />
          <Divider />
          <VideoGrid source="latest" title="Latest YouTube posts" />
        </div>
      </main>
    </div>
  );
};

export default withStyles(style)(Content);
