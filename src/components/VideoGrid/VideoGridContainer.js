import React from "react";
import VideoGrid from "./VideoGrid";
// Dummy data
import { HighLightVideo, NewsVideo } from "./../../data/videoData";

const VideoGridContainer = ({ source, ...others }) => {
  // Use prop.source to fetch data

  return (
    <VideoGrid
      {...others}
      items={source === "highLight" ? HighLightVideo : NewsVideo}
    />
  );
};

export default VideoGridContainer;
