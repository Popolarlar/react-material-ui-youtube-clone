import React from "react";
import { Route } from "react-router-dom";
import { RenderRoutes } from "./RenderRoutes";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: () => <h1>Log in</h1> },
  { path: "/test", key: "TEST", exact: true, component: () => <h1>Test</h1> },
  {
    path: "/app",
    key: "APP",
    component: RenderRoutes,
    routes: [
      {
        path: "/app",
        key: "APP_ROOT",
        exact: true,
        component: () => <h1>App Index</h1>,
      },
      {
        path: "/app/page",
        key: "APP_PAGE",
        exact: true,
        component: () => <h1>App Page</h1>,
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
