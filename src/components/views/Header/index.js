import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Avatar,
  Hidden,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import logo from "./../../../assets/yt_logo_rgb_light.png";
import { AvatarImg } from "../../../assets/resource";
import MenuButton from "../../common/MenuButton";

// Custom styles
import { withStyles } from "@material-ui/core";
import style from "./style";

const Header = ({ classes, toggleDrawer, toggleMenuExpand }) => {
  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar>
          <Hidden lgUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden mdDown>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="expand menu"
              onClick={toggleMenuExpand}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          {logo ? (
            <img src={logo} alt="logo" className={classes.logo} />
          ) : (
            <Typography variant="h6" noWrap>
              YouTube
            </Typography>
          )}

          <div className={classes.search}>
            <div className={classes.searchInput}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>

          <div className={classes.sectionDesktop}>
            <MenuButton
              icon={<VideoCallIcon />}
              items={["Upload video", "Go live"]}
            ></MenuButton>

            <MenuButton
              icon={<AppsIcon />}
              items={[
                "YouTube TV",
                "YouTube Music",
                "YouTube Kids",
                "Creator Academy",
                "YouTube for Artists",
              ]}
            ></MenuButton>
            <MenuButton
              icon={<NotificationsIcon />}
              items={["Notification 1", "Notification 2"]}
            ></MenuButton>

            <MenuButton
              icon={
                <Avatar
                  className={classes.account}
                  alt="account of current user"
                  src={AvatarImg}
                />
              }
              items={[
                "Dark theme: off",
                "Language: English",
                "Location: Australia",
              ]}
            ></MenuButton>

            {/* <Badge badgeContent={2} color="secondary">
              <NotificationsIcon />
            </Badge> */}
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </>
  );
};

export default withStyles(style)(Header);
