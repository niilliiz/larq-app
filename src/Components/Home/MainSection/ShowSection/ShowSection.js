import React from "react";
import DiagonalDiv from "../../../UI/DiagonalDiv/DiagonalDiv";
import SmartSection from "./SmartSection/SmartSection";
import ProductsSection from "./ProductsSection/ProductsSection";

import classes from "./showSection.module.css";
const showSection = (props) => {
  return (
    <div className={classes.showSection_area}>
      {/* <DiagonalDiv classType="showCase_diagonal" /> */}
      <div className={classes.showSection_container}>
        <SmartSection />
        <ProductsSection />
      </div>
    </div>
  );
};
export default showSection;
