import React from "react";
import BreakPoint from "./BreakPoint/BreakPoint";

import classes from "./cartProgress.module.css";
const catProgress = (props) => {
  return (
    <div className={classes.progress_container}>
      <BreakPoint classType="first_point" caption="Free shipping" />
      <BreakPoint classType="second_point" caption="$15 store credit" />
      <div className={classes.progress_caption}>
        You're <strong>$100.00</strong> away from getting{" "}
        <strong>free shipping</strong>.
      </div>
    </div>
  );
};
export default catProgress;
