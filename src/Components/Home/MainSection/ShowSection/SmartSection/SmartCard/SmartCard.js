import React from "react";
import Title from "../../../../../UI/Title/Title";

import classes from "./smartCard.module.css";
const smartCard = (props) => {
  let attachedClass =
    props.type === "firstColumn" ? "lowerElement" : "upperElement";
  return (
    <div className={[classes.smartCard_area, classes[attachedClass]].join(" ")}>
      <div className={classes.smartCard_container}>
        <Title classType="smartCard_title">{props.title}</Title>
        <p className={classes.smartCard_caption}>{props.desc}</p>
        <p
          className={[classes.smartCard_caption, classes.smartCard_info].join(
            " "
          )}
        >
          {props.children}
        </p>
      </div>
    </div>
  );
};
export default smartCard;
