import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@material-ui/core";

// Custom styles
import { withStyles } from "@material-ui/core";
import style from "./style";

const MenuButton = ({ classes, icon, items }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-owns={open ? "menu-appbar" : null}
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        className={classes.menuButton}
      >
        {icon}
      </IconButton>

      <Menu
        id="menu-appbar"
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        {items !== null &&
          items.length > 0 &&
          items.map((item, index) => (
            <MenuItem key={index} onClick={handleClose}>
              {item}
            </MenuItem>
          ))}
      </Menu>
    </>
  );
};

export default withStyles(style)(MenuButton);
