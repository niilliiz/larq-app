/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import classes from "./hovered.module.css";
const hovered = (props) => {
  return (
    <div className={classes.hovered_area}>
      <div className={classes.hovered_container}>
        <div className={classes.hovered_caption}>Select size:</div>
        <div className={classes.hovered_anchor}>
          <a className={classes.link} href="#">
            710ml
          </a>
          <a className={classes.link} href="#">
            910ml
          </a>
        </div>
      </div>
    </div>
  );
};
export default hovered;
