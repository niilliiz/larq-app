/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import IMG from "../../../../UI/Img/Img";
import classes from "./featuredItem.module.css";
const featuredItem = (props) => {
  return (
    <div className={classes.featured_area}>
      <IMG src={props.img} classType="img_featured" />

      <div className={classes.feature_caption}>
        <p>
          <a href="#" className={classes.feature_title}>
            {props.title}
          </a>
        </p>
        <p className={classes.feature_description}> {props.description} </p>
      </div>
    </div>
  );
};
export default featuredItem;
