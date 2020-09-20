import React from "react";

// Dummy data
import { HighLightVideo, NewsVideo } from "@data";

// Components
import VideoGrid from "@components/common/VideoGrid";

const HomeVideoGrid = ({ source, ...others }) => {
  // Use prop.source to fetch data

  return (
    <VideoGrid
      {...others}
      items={source === "highLight" ? HighLightVideo : NewsVideo}
    />
  );
};

export default HomeVideoGrid;
