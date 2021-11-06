import React from "react";
import CartHeader from "./CartHeader/CartHeader";
import CartStatus from "./CartStatus/CartStatus";

import classes from "./cartSlider.module.css";
const cartSlider = (props) => {
  const attachedClass = props.show ? "open_slide" : "close_slide";
  return (
    <div className={[classes.cart_area, classes[attachedClass]].join(" ")}>
      <div className={classes.cart_container}>
        <CartHeader />
        <CartStatus />
      </div>
    </div>
  );
};
export default cartSlider;
