import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Divider } from "@material-ui/core";
import ChipBar from "./../ChipBar";
import VideoGrid from "./../VideoGrid";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    background: "rgb(248,248,248)",
  },
}));

const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Divider />
      <ChipBar />
      <Divider />
      <div className="content">
        <VideoGrid />
        <Divider />
        <VideoGrid title="Breaking news" />
        <Divider />
        <VideoGrid title="Latest YouTube posts" />
      </div>
    </div>
  );
};

export default Main;
