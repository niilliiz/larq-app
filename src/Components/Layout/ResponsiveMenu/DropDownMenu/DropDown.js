import React from "react";
import FeaturedList from "../FeaturedList/FeaturedList";
import ShopList from "../ShopList/ShopList";

import classes from "./dropDown.module.css";
const dropDown = (props) => {
  let backdropClass = props.show ? "dropDown_backdrop" : "";
  let classType = props.show
    ? [classes.dropDown_area, classes.dropDown_show]
    : [classes.dropDown_area, classes.dropDown_hide];
  return (
    <div className={classes[backdropClass]}>
      <div
        className={classType.join(" ")}
        onMouseOver={props.mouseAround}
        onMouseOut={props.mouseOut}
      >
        <div className={classes.dropDown_container}>
          <FeaturedList />
          <ShopList />
        </div>
      </div>
    </div>
  );
};
export default dropDown;
