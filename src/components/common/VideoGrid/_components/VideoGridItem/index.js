import React from "react";
import { useHistory } from "react-router-dom";

// Material ui
import { Avatar, Typography } from "@material-ui/core";

// Custom style
import { withStyles } from "@material-ui/core";
import style from "./style";

// Resource
import { AvatarImg } from "@assets/resource";

const VideoGridItem = ({ classes, id, title, channel, views, thumbnail }) => {
  const history = useHistory();

  const handleVideoClick = (e) => {
    e.stopPropagation();
    history.push({
      pathname: `/watch/${id}`,
    });
  };

  return (
    <div className={classes.root} onClick={handleVideoClick}>
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

export default withStyles(style)(VideoGridItem);
