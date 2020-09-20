import React from "react";

// Material ui
import { Grid, Typography, ButtonBase } from "@material-ui/core";

// Custom style
import { withStyles } from "@material-ui/core";
import style from "./style";

// Uitility
import * as textService from "@format/text";

const VideoGridItem = ({ classes, title, channel, views, thumbnail, desc }) => {
  return (
    <Grid container>
      <Grid item>
        <ButtonBase className={classes.thumbnail}>
          <img src={thumbnail} alt="thumbnail" />
        </ButtonBase>
      </Grid>

      <Grid item xs container direction="column" className={classes.details}>
        <Grid item className={classes.meta}>
          <Typography variant="body1" component="h3" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="body2" color="inherit">
            {channel} {views} views 1 month ago
          </Typography>
        </Grid>
        <Grid item className={classes.description} zeroMinWidth>
          <Typography variant="body2">
            {desc && textService.TrimDesc(desc, 150)}
            {/* {desc} */}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(style)(VideoGridItem);
