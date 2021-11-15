import React from "react";
import classes from "./icon.module.css";
const icon = (props) => {
  return (
    <span>
      <i className={classes[props.classType]}>{props.children}</i>
    </span>
  );
};
export default icon;
