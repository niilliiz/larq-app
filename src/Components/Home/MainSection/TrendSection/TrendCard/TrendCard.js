/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Title from "../../../../UI/Title/Title";
import Img from "../../../../UI/Img/Img";
import Hovered from "../../../../UI/Hovered/Hovered";

import classes from "./trendCard.module.css";
const trend = (props) => {
  return (
    <div className={classes.trendCrd_area}>
      <div className={classes.trendCard_container}>
        <div className={classes.trend_img_container}>
          <Img src={props.src} classType="trend_img" />
          <Hovered />
        </div>
        <div className={classes.trend_caption_container}>
          <div className={classes.trend_caption_subTitle}>
            <Title classType="trend_subTitle">{props.subTitle}</Title>
          </div>
          <div>
            <Title classType="trend_title">{props.title}</Title>
          </div>
        </div>
      </div>
    </div>
  );
};
export default trend;
