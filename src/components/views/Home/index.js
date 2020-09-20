import React from "react";

// Layout
import DefaultLayout from "../../layouts/DefaultLayout";

// Material ui
import { Divider } from "@material-ui/core";

// Components
import ChipBar from "./_components/ChipBar";
import VideoGrid from "./../../common/VideoGrid/VideoGridContainer";

const Home = () => {
  return (
    <DefaultLayout>
      <Divider />
      <ChipBar />
      <Divider />
      <div>
        <VideoGrid source="highLight" />
        <Divider />
        <VideoGrid source="news" title="Breaking news" />
        <Divider />
        <VideoGrid source="latest" title="Latest YouTube posts" />
      </div>
    </DefaultLayout>
  );
};

export default Home;
