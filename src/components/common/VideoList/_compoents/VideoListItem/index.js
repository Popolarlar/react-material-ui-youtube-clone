import React from "react";
import { useHistory } from "react-router-dom";

// Material ui
import { Grid, Typography } from "@material-ui/core";

// Custom style
import { withStyles } from "@material-ui/core";
import style from "./style";

// Uitility
import * as textService from "@format/text";

const VideoGridItem = ({
  classes,
  id,
  title,
  channel,
  views,
  thumbnail,
  desc,
  withoutDesc,
}) => {
  const history = useHistory();

  const handleVideoClick = (e) => {
    e.stopPropagation();
    history.push({
      pathname: `/watch/${id}`,
    });
  };

  return (
    <Grid container className={classes.root} onClick={handleVideoClick}>
      <Grid item>
        <div className={classes.thumbnail}>
          <img src={thumbnail} alt="thumbnail" />
        </div>
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
            {!withoutDesc && desc && textService.TrimDesc(desc, 150)}
            {/* {desc} */}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(style)(VideoGridItem);
