import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Hidden } from "@material-ui/core";
import MiniSideBar from "./../MiniSideBar";
import SideBar from "./../SideBar";
import Main from "./../Main";

const useStyles = makeStyles((theme) => ({
  root: {
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    color: theme.palette.text.primary,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      {/* aside-mini hides when the screen smaller than 600px(sm) OR larger than 960px(md) */}
      <Hidden xsDown lgUp>
        <MiniSideBar />
      </Hidden>

      {/* aside hides when the screen smaller than 960px(md) */}
      <Hidden mdDown>
        <SideBar text="regular" />
      </Hidden>

      <Grid item xs>
        <Main />
      </Grid>
    </Grid>
  );
};

export default Home;
