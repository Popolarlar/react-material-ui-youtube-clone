import React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core";
import style from "./style";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const MenuListItem = ({ classes, icon, to, primary, mini, active }) => {
  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <Link to={to ? to : "/"} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <ListItem
      button
      className={`${mini ? classes.miniRoot : classes.root} ${
        active && "active"
      }`}
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
