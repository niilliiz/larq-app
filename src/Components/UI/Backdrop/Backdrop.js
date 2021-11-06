import React from "react";

import classes from "./backdrop.module.css";
const backdrop = (props) => {
  return props.show ? <div className={classes[props.classType]}></div> : null;
};
export default backdrop;
