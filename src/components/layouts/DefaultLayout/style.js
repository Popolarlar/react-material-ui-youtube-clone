/*
 * This is the overriding styles
 */

const style = (theme) => ({
  root: {
    height: "100vh",
    color: theme.palette.text.primary,
  },
  content: {
    height: "100vh",
    paddingTop: theme.mixins.toolbar.minHeight,
    display: "flex",
  },
  nav: {
    flexShrink: 0,
    [theme.breakpoints.up("sm")]: {
      width: "72px",
    },
  },
  navExpand: {
    flexShrink: 0,
    [theme.breakpoints.up("lg")]: {
      width: "240px",
    },
  },
  main: {
    flexGrow: 1,
  },
});

export default style;
