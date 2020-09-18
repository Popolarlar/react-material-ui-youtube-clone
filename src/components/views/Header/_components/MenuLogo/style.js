/*
 * This is the overriding styles
 */

const style = (theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menuButton: {
    padding: theme.spacing(1),
    margin: theme.spacing(0, 3, 0, -1),
  },
  logo: {
    display: "block",
    width: "80px",
  },
});

export default style;
