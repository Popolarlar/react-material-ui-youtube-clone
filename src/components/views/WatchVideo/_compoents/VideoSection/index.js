import React from "react";

// Material ui
import { Grid, Typography, Divider } from "@material-ui/core";

// Custom styles
import { withStyles } from "@material-ui/core";
import style from "./style";

const VideoSection = ({ classes, video }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.thumbnail}>
          <img src={video.thumbnail} alt="thumbnail" />
        </div>
      </Grid>

      <Grid item xs={12} className={classes.title}>
        <Typography variant="h6" component="h1">
          {video.title}
        </Typography>
        <Typography variant="body2">
          {video.views} views • 4 Aug 2019
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">
          I'm here to hold channel and video descriptions
        </Typography>
        <br />
        {video.desc}
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        I'm here to hold comments
      </Grid>
    </Grid>
  );
};

export default withStyles(style)(VideoSection);
// export default VideoSection;
