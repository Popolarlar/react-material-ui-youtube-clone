import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Grid, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  thumbnail: {
    maxWidth: "100%",
    marginBottom: theme.spacing(1.5),
  },
  details: {
    display: "flex",
  },
  meta: {
    marginLeft: theme.spacing(1.5),
    color: "rgb(96,96,96)",
  },
  title: {
    fontWeight: theme.typography.fontWeightMedium,
    color: "rgb(3,3,3)",
  },
}));

const VideoGridItem = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        src="https://images.unsplash.com/photo-1519275565142-d81952f9e2d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        alt="thumbnail"
        className={classes.thumbnail}
      />
      <div className={classes.details}>
        <Avatar
          alt="ava"
          src="https://i2.wp.com/churchillwild.com/wp-content/uploads/2019/03/janet-the-polar-bear-nanuk-polar-bear-lodge-george-turner-photo.jpg?resize=740%2C740&ssl=1"
        />
        <div className={classes.meta}>
          <Typography variant="body1" component="h3" className={classes.title}>
            Title
          </Typography>
          <Typography variant="body2" color="inherit">
            Channel
          </Typography>
          <Typography variant="body2" color="inherit">
            6.6M views 1 month ago
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default VideoGridItem;
