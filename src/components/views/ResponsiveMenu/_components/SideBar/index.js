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
import MenuListItem from "@components/common/MenuListItem";

const SideBar = ({ classes, toggleDrawer }) => {
  return (
    <div className={classes.root} onClick={toggleDrawer}>
      <List className={classes.list}>
        <MenuListItem to="/" primary="Home" icon={<HomeIcon />} active />
        <MenuListItem
          to="/feed/trending"
          primary="Trending"
          icon={<WhatshotIcon />}
        />
        <MenuListItem
          to="/feed/subscriptions"
          primary="Subscriptions"
          icon={<SubscriptionsIcon />}
        />
      </List>
      <Divider />
      <List>
        <MenuListItem
          to="/feed/libray"
          primary="Library"
          icon={<VideoLibraryIcon />}
        />
        <MenuListItem primary="History" icon={<HistoryIcon />} />
        <MenuListItem primary="Your videos" icon={<OndemandVideoIcon />} />
        <MenuListItem primary="Watch later" icon={<WatchLaterIcon />} />
        <MenuListItem primary="Playlist" icon={<PlaylistPlayIcon />} />
      </List>
      <Divider />
    </div>
  );
};

export default withStyles(style)(SideBar);
