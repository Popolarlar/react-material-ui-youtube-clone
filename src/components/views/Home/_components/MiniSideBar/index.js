import React from "react";

// Custom styles
import { withStyles } from "@material-ui/core";
import style from "./style";

// Material ui
import List from "@material-ui/core/List";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

// Components
import MenuListItem from "../../../../common/MenuListItem";

const MiniSideBar = ({ classes }) => {
  return (
    <List className={classes.root} component="nav">
      <MenuListItem text="Home" icon={<HomeIcon />} active mini />
      <MenuListItem text="Trending" icon={<WhatshotIcon />} mini />
      <MenuListItem text="Subscriptions" icon={<SubscriptionsIcon />} mini />
      <MenuListItem text="Library" icon={<VideoLibraryIcon />} mini />
    </List>
  );
};

export default withStyles(style)(MiniSideBar);
