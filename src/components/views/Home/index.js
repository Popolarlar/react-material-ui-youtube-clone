import React from "react";

// Layout
import DefaultLayout from "../../layouts/DefaultLayout";

// Material ui
import { Divider } from "@material-ui/core";

// Components
import ChipBar from "./_components/ChipBar";
import HomeVideoGrid from "./_components/HomeVideoGrid";

const Home = () => {
  return (
    <DefaultLayout>
      <Divider />
      <ChipBar />
      <Divider />
      <div>
        <HomeVideoGrid source="highLight" />
        <Divider />
        <HomeVideoGrid source="news" title="Breaking news" />
        <Divider />
        <HomeVideoGrid source="latest" title="Latest YouTube posts" />
      </div>
    </DefaultLayout>
  );
};

export default Home;
