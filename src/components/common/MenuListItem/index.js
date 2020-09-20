import React from "react";
import { NavLink } from "react-router-dom";

import { withStyles } from "@material-ui/core";
import style from "./style";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const MenuListItem = ({ classes, icon, to, primary, mini }) => {
  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <NavLink
          to={to ? to : "/"}
          ref={ref}
          {...itemProps}
          exact
          activeClassName="active"
        />
      )),
    [to]
  );

  return (
    <ListItem
      button
      className={mini ? classes.miniRoot : classes.root}
      component={renderLink}
    >
      {icon && <ListItemIcon className="menuIcon">{icon}</ListItemIcon>}
      <ListItemText
        primary={primary}
        primaryTypographyProps={{ variant: mini ? "caption" : "body1" }}
      />
    </ListItem>
  );
};

export default withStyles(style)(MenuListItem);
