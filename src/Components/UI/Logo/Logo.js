import React from "react";

import classes from "./logo.module.css";
const logo = (props) => {
  return (
    <div>
      <img
        src="../../../asset/img/logo/logo-larq.svg"
        className={classes.logo}
        alt="LARQ logo"
      />
    </div>
  );
};
export default logo;
