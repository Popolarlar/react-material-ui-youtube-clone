import React from "react";

import { withStyles } from "@material-ui/core";
import style from "./style";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const MenuListItem = ({ classes, icon, text, mini, active, url }) => {
  return (
    <ListItem
      button
      className={`${mini ? classes.miniRoot : classes.root} ${
        active && "active"
      }`}
      // className={`${classes.root} ${active && "active"}`}
    >
      <ListItemIcon className="icon">{icon}</ListItemIcon>
      <ListItemText
        primary={text}
        primaryTypographyProps={{ variant: mini ? "caption" : "body1" }}
      />
    </ListItem>
  );
};

export default withStyles(style)(MenuListItem);
