/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
import React from "react";
import { Route, Switch } from "react-router-dom";
import { RouteWithSubRoutes } from "./routes";

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}
