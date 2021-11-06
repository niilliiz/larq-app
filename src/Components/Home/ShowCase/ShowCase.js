import React from "react";
import IMG from "../../UI/Img/Img";
import Title from "../../UI/Title/Title";
import BorderButton from "../../UI/BorderButton/BorderButon";

import classes from "./showCase.module.css";
const showCase = (props) => {
  return (
    <div>
      <IMG src="/showCase/showCase.jpg" classType="img_showCase" />
      <div className={classes.showCase_container}>
        <Title classType="top_title">Dip into pure water</Title>
        <div className={classes.showCase_caption}>
          Award-winning design with effective UV-C LED technology for on-the-go
          water purification.
        </div>
        <BorderButton>Shop Now</BorderButton>
      </div>
    </div>
  );
};
export default showCase;
