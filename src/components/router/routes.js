import React from "react";
import { Route } from "react-router-dom";
import { RenderRoutes } from "./RenderRoutes";

// Components
import Home from "./../views/Home";
import Trending from "./../views/Trending";
import Subscriptions from "./../views/Subscriptions";
import Libray from "./../views/Libray";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: Home },
  {
    path: "/feed",
    key: "FEED",
    component: RenderRoutes,
    routes: [
      {
        path: "/feed",
        key: "FEED_ROOT",
        exact: true,
        component: () => <h1>Feed</h1>,
      },
      {
        path: "/feed/trending",
        key: "FEED_TRENDING",
        exact: true,
        component: Trending,
      },

      {
        path: "/feed/subscriptions",
        key: "FEED_SUBSCRIPTIONS",
        exact: true,
        component: Subscriptions,
      },
      {
        path: "/feed/libray",
        key: "FEED_LIBRAY",
        exact: true,
        component: Libray,
      },
    ],
  },
];

export default ROUTES;

// “A special wrapper for <Route/> that knows how to handle "sub"-routes by passing them in a routes prop to the component it renders.”
export function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}
