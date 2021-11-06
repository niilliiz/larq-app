import React from "react";

import classes from "./video.module.css";
const video = (props) => {
  return (
    <div>
      <video className={classes[props.classType]}>
        <source src={`../../../asset/video/${props.src}`} />
      </video>
    </div>
  );
};
export default video;
