import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Typography } from "@material-ui/core";
import { AvatarImg } from "@assets/resource";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  thumbnail: {
    position: "relative",
    paddingBottom: "56.2%", // aspect ratio 16:9
    marginBottom: theme.spacing(2),

    "& > img": {
      position: "absolute",
      objectFit: "cover",
      width: "100%",
      height: " 100%",
    },
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

const VideoGridItem = ({ title, channel, views, thumbnail }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.thumbnail}>
        <img src={thumbnail} alt="thumbnail" />
      </div>

      <div className={classes.details}>
        <Avatar alt="ava" src={AvatarImg} />
        <div className={classes.meta}>
          <Typography variant="body1" component="h3" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="body2" color="inherit">
            {channel}
          </Typography>
          <Typography variant="body2" color="inherit">
            {views} views 1 month ago
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default VideoGridItem;
