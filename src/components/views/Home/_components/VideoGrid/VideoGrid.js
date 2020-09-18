import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import VideoGridItem from "./_components/VideoGridItem";

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

const VideoGrid = ({ title, items }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {title && (
        <Typography variant="h5" component="h2" className={classes.title}>
          {title}
        </Typography>
      )}

      <Grid container spacing={3}>
        {items !== null &&
          items.length > 0 &&
          items.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <VideoGridItem {...item} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default VideoGrid;
