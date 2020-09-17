import React from "react";

// Custom styles
import { withStyles } from "@material-ui/core";
import style from "./style";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

const MiniSideBar = ({ classes }) => {
  return (
    <List className={classes.root} component="nav">
      <ListItem button className="active">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText
          primary="Home"
          primaryTypographyProps={{ variant: "caption" }}
        />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <WhatshotIcon />
        </ListItemIcon>
        <ListItemText
          primary="Trending"
          primaryTypographyProps={{ variant: "caption" }}
        />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SubscriptionsIcon />
        </ListItemIcon>
        <ListItemText
          primary="Subscriptions"
          primaryTypographyProps={{ variant: "caption" }}
        />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <VideoLibraryIcon />
        </ListItemIcon>
        <ListItemText
          primary="Library"
          primaryTypographyProps={{ variant: "caption" }}
        />
      </ListItem>
    </List>
  );
};

export default withStyles(style)(MiniSideBar);
