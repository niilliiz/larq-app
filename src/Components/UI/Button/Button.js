import React from "react";

import classes from "./button2.module.css";
const button = (props) => {
  return (
    <div>
      <button className={classes[props.classType]}>{props.children}</button>
    </div>
  );
};
export default button;
