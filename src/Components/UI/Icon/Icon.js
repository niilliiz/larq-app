import React from "react";
import classes from "./icon.module.css";
const icon = (props) => {
  return (
    <span>
      <i className={[classes.icon, classes[props.classType]].join(" ")}>
        {props.children}
      </i>
    </span>
  );
};
export default icon;
