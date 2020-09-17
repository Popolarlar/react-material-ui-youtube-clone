import React from "react";
import { Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: theme.spacing(1),
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const ChipBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Chip label="Basic" />
      <Chip label="Basic" />
      <Chip label="Basic" />
      <Chip label="Basic" />
      <Chip label="Basic" />
      <Chip label="Basic" />
      <Chip label="Basic" />
      <Chip label="Basic" />
      <Chip label="Basic" />
      <Chip label="Basic" />
    </div>
  );
};

export default ChipBar;
