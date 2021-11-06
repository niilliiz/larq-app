/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import classes from "./listItem.module.css";
const list = (props) => {
  let list = null;
  if (props.mouseOver || props.mouseOut) {
    list = (
      <li
        className={classes[props.classType]}
        onMouseOver={props.mouseOver}
        onMouseOut={props.mouseOut}
      >
        <a href="#" className={classes.item}>
          {props.children}
        </a>
      </li>
    );
  } else {
    list = (
      <li className={classes[props.classType]}>
        <a href="#" className={classes.item}>
          {props.children}
        </a>
      </li>
    );
  }
  return <div> {list} </div>;
};
export default list;
