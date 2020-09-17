/*
 * This is the overriding styles
 */

const style = (theme) => ({
  root: {
    width: "100%",
    height: "100%",
    background: "rgb(248,248,248)",
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
