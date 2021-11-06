import React from "react";
import CartStatusDetail from "./CartStatusDetail/CartStatusDetail";
import CartContent from "./CartContent/CartContent";
import classes from "./cartStatus.module.css";
const cartContent = (props) => {
  return (
    <div className={classes.cartStatus_container}>
      <CartStatusDetail />
      <CartContent />
    </div>
  );
};
export default cartContent;
