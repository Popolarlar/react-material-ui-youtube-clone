/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
import React from "react";
import { Route, Switch } from "react-router-dom";
import { RouteWithSubRoutes } from "./routes";
import Loading from "./../views/Loading";
import NotFound from "./../views/NotFound";

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={NotFound} />
    </Switch>
  );
}
