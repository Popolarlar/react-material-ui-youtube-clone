import React from "react";

// Layout
import DefaultLayout from "../../layouts/DefaultLayout";

// Dummy data
import { HighLightVideo } from "@data";

const WatchVideo = ({ match, location }) => {
  const {
    params: { videoId },
  } = match;

  // Use the videoId to fetch video info
  const video = HighLightVideo.filter((video) => video.id === videoId)[0];

  return (
    <DefaultLayout>
      <div>I'm a video page - {video.id}</div>
      <div>I'm a video page - {video.title}</div>
      <div>I'm a video page - {video.desc}</div>
      {console.log(video)}
    </DefaultLayout>
  );
};

export default WatchVideo;
