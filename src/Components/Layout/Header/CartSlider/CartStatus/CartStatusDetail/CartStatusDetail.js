import React from "react";
import CartProgress from "./CartProgress/CartProgress";

import classes from "./cartStatusDetail.module.css";
const cartContentDetail = (props) => {
  return (
    <div className={classes.cart_detail}>
      <CartProgress />
    </div>
  );
};
export default cartContentDetail;
