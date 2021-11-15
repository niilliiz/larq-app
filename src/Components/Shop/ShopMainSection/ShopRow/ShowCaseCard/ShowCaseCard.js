import React from "react";
import Img from "../../../../UI/Img/Img";

import classes from "./showCaseCard.module.css";
const showCaseCard = ({ cardInfo }) => {
  const loadingDescItem = Object.keys(cardInfo.description).map((desc, i) => {
    return (
      <li key={i} className={classes.desc_item}>
        {cardInfo.description[desc]}
      </li>
    );
  });
  return (
    <div className={classes.cardInfo_area}>
      <div className={classes.cardInfo_img}>
        <Img src={cardInfo.img} classType="img_shopRowCase" />
      </div>
      <div className={classes.cardInfo_feature}>
        <h3 className={classes.cardInfo_feature_caption}>
          {cardInfo.feature}{" "}
          <i className={["fa fa-angle-up", classes.arrowUp].join(" ")}></i>
        </h3>
      </div>
      <div className={classes.cardInfo_description_area}>
        <div className={classes.cardInfo_description_container}>
          <ul className={classes.cardInfo_desc_lists}>{loadingDescItem}</ul>
        </div>
      </div>
    </div>
  );
};
export default showCaseCard;
