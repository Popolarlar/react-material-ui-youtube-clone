import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import VideoGridItem from "./../VideoGridItem";

const useStyles = makeStyles((theme) => ({
  root: {
    // border: "1px solid black",
    width: "100%",
    padding: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const VideoGrid = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5" component="h2" className={classes.title}>
        Section Title
      </Typography>
      <Grid container spacing={3}>
        {/* {props.children} array.map*/}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <VideoGridItem>test</VideoGridItem>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <VideoGridItem>test</VideoGridItem>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <VideoGridItem>test</VideoGridItem>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <VideoGridItem>test</VideoGridItem>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <VideoGridItem>test</VideoGridItem>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <VideoGridItem>test</VideoGridItem>
        </Grid>
      </Grid>
    </div>
  );
};

export default VideoGrid;
