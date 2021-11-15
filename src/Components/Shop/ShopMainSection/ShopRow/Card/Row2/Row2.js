import React from "react";
import classes from "./row2.module.css";
const row2 = ({ price, sale, all }) => {
  // console.log(all);
  let loadingPrice;
  if (sale) {
    loadingPrice = (
      <div className={classes.price_area}>
        <span className={classes.price}>${sale}</span>
        <span className={classes.price_onSale}>${price}</span>
      </div>
    );
  } else {
    loadingPrice = (
      <div className={classes.price_area}>
        <span className={classes.price}>${price}</span>
      </div>
    );
  }
  let loadingStatus;
  if (all <= 4) {
    loadingStatus = (
      <div className={classes.row2_status__area}>
        <span className="fa fa-spinner"></span>
        <span className={classes.status_caption}>Limited Stock</span>
      </div>
    );
  }
  if (all === 0) {
    loadingStatus = (
      <div className={classes.row2_status__area}>
        <span className={classes.status_caption}>Out of stock</span>
      </div>
    );
  }
  return (
    <div className={classes.row2_area}>
      {loadingPrice}
      {loadingStatus}
    </div>
  );
};
export default row2;
