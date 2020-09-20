import React from "react";

// Dummy data
import { NewsVideo } from "@data";

// Components
import VideoGrid from "@components/common/VideoGrid";

const SubscriptionsVideoGrid = ({ source, ...others }) => {
  // Use prop.source to fetch data

  return <VideoGrid {...others} items={NewsVideo} />;
};

export default SubscriptionsVideoGrid;
