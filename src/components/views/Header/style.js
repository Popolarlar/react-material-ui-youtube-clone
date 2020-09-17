/*
 * This is the overriding styles
 */
import { fade } from "@material-ui/core/styles";

const style = (theme) => ({
  root: {
    width: "100%",
    background: "white",
    color: theme.palette.text.primary,
    boxShadow: "unset",
    zIndex: theme.zIndex.drawer + 1,

    "& .MuiIconButton-root": {
      padding: theme.spacing(1),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    display: "block",
    width: "80px",
  },
  search: {
    flex: "1 1 auto",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(5),
      marginLeft: theme.spacing(5),
      display: "block",
    },
  },
  searchInput: {
    maxWidth: "728px",
    position: "relative",
    margin: "0 auto",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  },
  sectionDesktop: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
    minWidth: "225px",
    [theme.breakpoints.up("sm")]: {
      flexGrow: 0,
    },
    "& > *": {
      marginRight: theme.spacing(1.25),
    },
  },
  offset: theme.mixins.toolbar,
});

export default style;
