import React from "react";
import classes from "./title.module.css";
const title = (props) => {
  return (
    <div className={classes.title_area}>
      <p className={classes[props.classType]}> {props.children} </p>
    </div>
  );
};
export default title;
