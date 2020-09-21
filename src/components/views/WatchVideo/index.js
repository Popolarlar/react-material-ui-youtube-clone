import React from "react";

// Material ui
import { Grid } from "@material-ui/core";

// Custom styles
import { withStyles } from "@material-ui/core";
import style from "./style";

// Layout
import VideoLayout from "../../layouts/VideoLayout";

// Dummy data
import { HighLightVideo, NewsVideo } from "@data";
import VideoSection from "./_compoents/VideoSection";
import RelatedVideoList from "./_compoents/RelatedVideoList";

const WatchVideo = ({ classes, match, location }) => {
  const {
    params: { videoId },
  } = match;

  // Use the videoId to fetch video info
  const video =
    HighLightVideo.filter((video) => video.id === videoId)[0] ||
    NewsVideo.filter((video) => video.id === videoId)[0];

  // Use the videoId to fetch related videos info
  const videos = HighLightVideo;

  return (
    <VideoLayout>
      <Grid container className={classes.root}>
        <Grid item xs={12} md className={classes.videoSection}>
          <VideoSection video={video} />
        </Grid>
        <Grid item xs={12} md={"auto"} className={classes.relatedVideo}>
          <RelatedVideoList videos={videos} />
        </Grid>
      </Grid>
    </VideoLayout>
  );
};

export default withStyles(style)(WatchVideo);
