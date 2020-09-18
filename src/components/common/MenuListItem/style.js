/*
 * This is the overriding styles
 */

const style = (theme) => ({
  root: {
    "&.active .icon": {
      color: theme.palette.error.main,
    },
  },
  miniRoot: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2, 0, 1, 0),

    "&.active": {
      color: theme.palette.error.main,
    },

    "& .menuIcon": {
      minWidth: "unset",
      color: "inherit",
    },
  },
});

export default style;
