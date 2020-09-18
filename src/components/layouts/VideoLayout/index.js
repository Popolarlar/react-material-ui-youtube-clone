import React, { useState } from "react";

// Custom styles
import { withStyles } from "@material-ui/core";
import style from "./style";

// Components
import MenuDrawer from "./../../views/MenuDrawer";
import Header from "./../../views/Header";

const VideoLayout = ({ classes, children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuExpand, setMenuExpand] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleMenuExpand = () => {
    setMenuExpand(!menuExpand);
  };

  // use React.Children to iterate over the children, and then clone each element with new props (shallow merged) using React.cloneElement.
  const childrenWithProps = React.Children.map(children, (child) => {
    const props = { menuExpand };

    if (React.isValidElement(child)) {
      return React.cloneElement(child, props);
    }
    return child;
  });

  return (
    <div className={classes.root}>
      <Header toggleDrawer={toggleDrawer} toggleMenuExpand={toggleMenuExpand} />
      <nav>
        <MenuDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      </nav>

      <div className={classes.content}>{childrenWithProps}</div>
    </div>
  );
};

export default withStyles(style)(VideoLayout);
