import React from "react";

import classes from "./diagonal.module.css";
const diagonalDiv = (props) => {
  return (
    <div
      className={[classes.diagonalDiv, classes[props.classType]].join(" ")}
    ></div>
  );
};
export default diagonalDiv;
