import React from "react";
import classes from "./shopShowCase.module.css";
const shopShowCase = (props) => {
  return (
    <div className={classes.showCase_area}>
      <div className={classes.showCase_container}>
        <div className={classes.showCase_content}>
          <h1 className={classes.showCase_header}>Sip Smart</h1>
          <p className={classes.showCase_caption}>
            PureVis™ technology eradicates harmful odor-causing germs so you can
            worry less and drink more.
          </p>
        </div>
      </div>
    </div>
  );
};
export default shopShowCase;
