import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Avatar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import logo from "./../../assets/yt_logo_rgb_light.png";
import { AvatarImg } from "./../../assets/resource";
import MenuButton from "../MenuButton";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: "white",
    color: theme.palette.text.primary,
    boxShadow: "unset",

    "& .MuiIconButton-root": {
      padding: theme.spacing(1),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    display: "block",
    width: "80px",
  },
  search: {
    flex: "1 1 auto",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(5),
      marginLeft: theme.spacing(5),
      display: "block",
    },
  },
  searchInput: {
    maxWidth: "728px",
    position: "relative",
    margin: "0 auto",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  },
  sectionDesktop: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
    minWidth: "225px",
    [theme.breakpoints.up("sm")]: {
      flexGrow: 0,
    },
    "& > *": {
      marginRight: theme.spacing(1.25),
    },
  },
  offset: theme.mixins.toolbar,
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
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

export default Header;
