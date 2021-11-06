/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import classes from "./copyRight.module.css";
const copyRight = (props) => {
  return (
    <div className={classes.copy_area}>
      <p className={classes.copy_caption}>&copy;LARQ. All Rights Reserved.</p>
      <p>
        <a
          href="#"
          className={[classes.copy_caption, classes.copy_mail].join(" ")}
        >
          hello@livelarq.com
        </a>
      </p>
    </div>
  );
};
export default copyRight;
