/*
 * This is the overriding styles
 */

const style = (theme) => ({
  root: {
    border: "1px solid black",
  },
  thumbnail: {
    position: "relative",
    paddingBottom: "56.2%", // aspect ratio 16:9
    "& > img": {
      position: "absolute",
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },
  },
  title: {
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(1),
  },
});

export default style;
