import React from "react";

// Layout
import DefaultLayout from "../../layouts/DefaultLayout";

// Material ui
import { Container, Divider } from "@material-ui/core";
import TrendingVideoList from "./_components/TrendingVideoList";

const Trending = () => {
  return (
    <DefaultLayout>
      <Container>
        <Divider />
        <TrendingVideoList source="latest" title="Latest YouTube posts" />
      </Container>
    </DefaultLayout>
  );
};

export default Trending;
