/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Title from "../../../../../../../UI/Title/Title";

import classes from "./gridElementLink.module.css";
const gridElementLink = ({ title, feature, more }) => {
  return (
    <a href="#" className={classes.gridLink}>
      <Title classType="gridLink_title">{title}</Title>
      <div className={classes.gridLink_feature}>{feature}</div>
      <div className={classes.gridLink_more}>{more}</div>
    </a>
  );
};
export default gridElementLink;
