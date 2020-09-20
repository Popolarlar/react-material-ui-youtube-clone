/*
 * This is the overriding styles
 */

const style = (theme) => ({
  root: {
    width: "100%",
  },
  thumbnail: {
    position: "relative",
    width: "246px",
    height: "138px",
    marginRight: theme.spacing(2),

    "& > img": {
      position: "absolute",
      objectFit: "cover",
      width: "100%",
      height: " 100%",
    },
  },
  details: {
    maxWidth: "600px",
  },
  meta: {
    color: "rgb(96,96,96)",
  },
  title: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.htmlFontSize,
    color: "rgb(3,3,3)",
  },
  description: {
    paddingTop: theme.spacing(2),
  },
});

export default style;
