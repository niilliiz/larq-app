import React from "react";
import Video from "../../../../../../UI/Video/Video";
import IMG from "../../../../../../UI/Img/Img";
import GridElementLink from "./GridElementLink/GridElementCaption";

import classes from "./gridElement.module.css";
const gridElement = ({ src, title, feature, more, classType }) => {
  let media;
  if (src.includes("mp4")) {
    media = <Video src={src} classType="grid_video" />;
  } else {
    media = <IMG src={src} classType="grid_img" />;
  }
  return (
    <div
      className={[
        classes.grid_element,
        classes[classType[0]],
        classes[classType[1]],
      ].join(" ")}
    >
      <div className={classes.grid_media}>{media}</div>
      <GridElementLink title={title} feature={feature} more={more} />
    </div>
  );
};
export default gridElement;
