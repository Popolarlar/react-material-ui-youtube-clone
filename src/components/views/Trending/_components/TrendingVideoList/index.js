import React from "react";

// Dummy data
import { HighLightVideo } from "@data";

// Components
import VideoList from "@components/common/VideoList";

const TrendingVideoList = ({ source, ...others }) => {
  // Use prop.source to fetch data

  return <VideoList {...others} items={HighLightVideo} />;
};

export default TrendingVideoList;
