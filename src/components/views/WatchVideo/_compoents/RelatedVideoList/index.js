import React from "react";

// Custom styles
import { withStyles } from "@material-ui/core";
import style from "./style";

import VideoList from "@components/common/VideoList";

const RelatedVideoList = ({ classes, videos }) => {
  return (
    <>
      <VideoList items={videos} withoutDesc={true} />
    </>
  );
};

export default withStyles(style)(RelatedVideoList);
