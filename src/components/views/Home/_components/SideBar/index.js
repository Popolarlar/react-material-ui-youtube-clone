import React from "react";

// Custom styles
import { withStyles } from "@material-ui/core";
import style from "./style";

// Material ui
import { List, Divider } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

// Components
import MenuListItem from "../../../../common/MenuListItem";

const SideBar = ({ classes }) => {
  return (
    <div className={classes.root}>
      <List className={classes.list}>
        <MenuListItem text="Home" icon={<HomeIcon />} active />
        <MenuListItem text="Trending" icon={<WhatshotIcon />} />
        <MenuListItem text="Subscriptions" icon={<SubscriptionsIcon />} />
      </List>
      <Divider />
      <List>
        <MenuListItem text="Library" icon={<VideoLibraryIcon />} />
        <MenuListItem text="History" icon={<HistoryIcon />} />
        <MenuListItem text="Your videos" icon={<OndemandVideoIcon />} />
        <MenuListItem text="Watch later" icon={<WatchLaterIcon />} />
        <MenuListItem text="Playlist" icon={<PlaylistPlayIcon />} />
      </List>
      <Divider />
    </div>
  );
};

export default withStyles(style)(SideBar);
