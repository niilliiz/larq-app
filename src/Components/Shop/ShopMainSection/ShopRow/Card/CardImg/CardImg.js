/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Img from "../../../../../UI/Img/Img";
import classes from "./cardImg.module.css";

const cardImg = ({ src1, src2 }) => {
  return (
    <div>
      <a href="#" className={classes.cardImg_area}>
        <div className={classes.cardImg_show}>
          <Img
            alt="card img"
            classType="img_cardImg"
            src={`../../../../../../asset/img/${src1}`}
          />
        </div>
        <div className={classes.cardImg_hovered}>
          <Img
            alt="card img"
            classType="img_cardImg"
            src={`../../../../../../asset/img/${src2}`}
          />
        </div>
      </a>
    </div>
  );
};
export default cardImg;
