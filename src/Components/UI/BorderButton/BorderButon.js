import React from "react";

import classes from "./borderButton.module.css";
const borderButton = (props) => {
  return (
    <div className={classes.firstBorder}>
      <button className={classes.button}>{props.children}</button>
    </div>
  );
};
export default borderButton;
