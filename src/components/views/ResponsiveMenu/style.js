/*
 * This is the overriding styles
 */

const miniSideBarWidth = "72px";
const sideBarWidth = "240px";

const style = (theme) => ({
  root: {},
  miniSideBarPaper: {
    width: miniSideBarWidth,
    overflowX: "hidden",
  },
  sideBarPaper: {
    width: sideBarWidth,
  },
});

export default style;
