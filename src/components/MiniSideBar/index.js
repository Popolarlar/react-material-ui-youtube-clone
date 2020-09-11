import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    "& .MuiList-root": {
      padding: 0,
    },
    "& .MuiListItem-root": {
      display: "flex",
      flexDirection: "column",
      width: "72px",
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
}));
const MiniSideBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button className="active">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            primary="Home"
            primaryTypographyProps={{ variant: "caption" }}
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <WhatshotIcon />
          </ListItemIcon>
          <ListItemText
            primary="Trending"
            primaryTypographyProps={{ variant: "caption" }}
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SubscriptionsIcon />
          </ListItemIcon>
          <ListItemText
            primary="Subscriptions"
            primaryTypographyProps={{ variant: "caption" }}
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <VideoLibraryIcon />
          </ListItemIcon>
          <ListItemText
            primary="Library"
            primaryTypographyProps={{ variant: "caption" }}
          />
        </ListItem>
      </List>
    </div>
  );
};

export default MiniSideBar;
