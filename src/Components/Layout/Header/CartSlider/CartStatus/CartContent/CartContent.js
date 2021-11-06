import React from "react";
import Button from "../../../../../UI/Button/Button";

import classes from "./cartContent.module.css";
const cartContent = (props) => {
  return (
    <div className={classes.cartContent_area}>
      <div className={classes.cartContent_container}>
        <div className={classes.cartContent_content__empty}>
          Oh, it appears your cart is empty
        </div>
        <div className={classes.cart_btn}>
          <Button classType="btn_cart">SHOP LARQ</Button>
        </div>
      </div>
    </div>
  );
};
export default cartContent;
