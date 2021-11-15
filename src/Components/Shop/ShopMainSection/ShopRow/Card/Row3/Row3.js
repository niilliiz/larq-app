/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Cart from "../../../../../UI/Cart/Cart";

import classes from "./row3.module.css";
const row3 = ({ set }) => {
  console.log(set);

  let loadingInput = Object.keys(set).map((item, i) => {
    if (set[item]) {
      return (
        <fieldset className={classes.row3_field}>
          <legend className={classes.field_legend}>Select size:</legend>
          <div className={classes.field_input_area} key={i}>
            <label className={classes.field_label}></label>
            <input type="radio" className={classes.field_input} />
            <div className={classes.caption}>
              <a href="#">{item}</a>
            </div>
          </div>
        </fieldset>
      );
    }
  });
  return (
    <div className={classes.row3_area}>
      {loadingInput}
      <div className={classes.row3_cart}>
        <span className="fa fa-cart-plus"></span>
      </div>
    </div>
  );
};
export default row3;
