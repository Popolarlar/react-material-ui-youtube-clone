import React from "react";
import { Link } from "react-router-dom";

// Material ui
import { IconButton, Typography, Hidden } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

// Custom styles
import { withStyles } from "@material-ui/core";
import style from "./style";

// Asset
import logo from "@assets/logo";

const MenuLogo = ({ classes, toggleDrawer, toggleMenuExpand }) => {
  return (
    <div className={classes.root}>
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
      <Link to="/">
        {logo ? (
          <img src={logo} alt="logo" className={classes.logo} />
        ) : (
          <Typography variant="h6" noWrap>
            YouTube
          </Typography>
        )}
      </Link>
    </div>
  );
};

export default withStyles(style)(MenuLogo);
