import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid black",
    width: "240px",
  },
}));
const SideBar = (props) => {
  const classes = useStyles();
  return <div className={classes.root}>This is a {props.text} sidebar</div>;
};

export default SideBar;
