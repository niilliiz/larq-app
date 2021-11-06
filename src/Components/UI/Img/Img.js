/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import classes from "./img.module.css";

const image = (props) => {
  return (
    <div className={classes.img_container}>
      <img
        src={`../../../asset/img/${props.src}`}
        alt=""
        className={classes[props.classType]}
        onClick={props.hidingMenu}
      />
    </div>
  );
};
export default image;
