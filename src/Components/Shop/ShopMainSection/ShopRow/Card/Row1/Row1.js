import React from "react";
import classes from "./row1.module.css";
const row1 = ({ name }) => {
  return (
    <div className={classes.row1_area}>
      <h3 className={classes.row1_caption}>{name}</h3>
      <div className={classes.row1_btn__area}>
        <button className={classes.row1_btn}>Learn more</button>
      </div>
    </div>
  );
};
export default row1;
