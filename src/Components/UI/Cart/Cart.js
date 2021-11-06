/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import classes from "./cart.module.css";
// import Cart from "../../../asset/img/cart/asset 29.svg";
const cart = (props) => {
  return (
    <div>
      <img
        src="../../../asset/img//cart/asset 29.svg"
        alt="cart image"
        className={classes.cart}
        onClick={(e) => props.showingMenu(e, "cart")}
      />
    </div>
  );
};
export default cart;
