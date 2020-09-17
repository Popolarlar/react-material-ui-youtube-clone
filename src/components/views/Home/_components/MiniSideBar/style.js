/*
 * This is the overriding styles
 */

const style = (theme) => ({
  root: {
    height: "100%",
    padding: 0,
    paddingTop: theme.mixins.toolbar.minHeight,

    "& .MuiListItem-root": {
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(2, 0, 1, 0),

      "&.active": {
        color: theme.palette.error.main,
      },
    },
    "& .MuiListItemIcon-root": {
      minWidth: "unset",
      color: "inherit",
    },
  },
});

export default style;
