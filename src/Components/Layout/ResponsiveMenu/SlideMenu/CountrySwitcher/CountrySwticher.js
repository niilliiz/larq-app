import React from "react";

import classes from "./countrySwitcher.module.css";
const countrySwitcher = (props) => {
  return (
    <div className={classes.countrySwitch_area}>
      <div>country</div>
      <div>currency</div>
    </div>
  );
};
export default countrySwitcher;
