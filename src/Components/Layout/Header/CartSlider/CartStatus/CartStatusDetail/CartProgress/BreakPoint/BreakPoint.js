import React from "react";

import classes from "./breakPoint.module.css";
const breakPoint = (props) => {
  return (
    <div
      className={[classes.breakPoint_container, classes[props.classType]].join(
        " "
      )}
    >
      <div className={classes.breakPoint_topic}>{props.caption}</div>
      <div className={classes.breakpoint_point}></div>
    </div>
  );
};
export default breakPoint;
