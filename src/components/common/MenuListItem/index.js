import React from "react";

import { withStyles } from "@material-ui/core";
import style from "./style";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const MenuListItem = ({ classes, icon, text, active, url }) => {
  return (
    <ListItem button className={classes.root}>
      <ListItemIcon className={active ? classes.active : ""}>
        {icon}
      </ListItemIcon>
      <ListItemText
        primary={text}
        primaryTypographyProps={{ variant: "body1" }}
      />
    </ListItem>
  );
};

export default withStyles(style)(MenuListItem);
