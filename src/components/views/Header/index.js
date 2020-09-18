import React from "react";
import { AppBar, Toolbar, InputBase, Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { AvatarImg } from "../../../assets/resource";
import MenuButton from "../../common/MenuButton";

// Custom styles
import { withStyles } from "@material-ui/core";
import style from "./style";

// Components
import MenuLogo from "./_components/MenuLogo";

const Header = ({ classes, toggleDrawer, toggleMenuExpand }) => {
  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar>
          <MenuLogo
            toggleDrawer={toggleDrawer}
            toggleMenuExpand={toggleMenuExpand}
          />
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
