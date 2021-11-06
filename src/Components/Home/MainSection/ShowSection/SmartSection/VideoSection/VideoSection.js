import React from "react";
import Video from "../../../../../UI/Video/Video";
import Diagonal from "../../../../../UI/DiagonalDiv/DiagonalDiv";

import classes from "./videoSection.module.css";
const videoSection = (props) => {
  const src = "smartSection/bottle.mp4";
  return (
    <div className={classes.video_area}>
      <div className={classes.video_container}>
        <Video src={src} classType="smartSection_video" />
        <Diagonal classType="smart_diagnal_1" />
        <Diagonal classType="smart_diagnal_2" />
      </div>
    </div>
  );
};
export default videoSection;
