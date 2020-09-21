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
  },
});

export default style;
