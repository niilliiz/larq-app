import React from "react";
import Title from "../../../../UI/Title/Title";
import ProductsGrid from "./ProductsGrid/ProductsGrid";

import classes from "./productsSection.module.css";
const productsSection = (props) => {
  return (
    <div className={classes.showProducts_area}>
      <Title classType="title_mainSection">Products</Title>
      <div className={classes.gird_area}>
        <ProductsGrid />
      </div>
    </div>
  );
};
export default productsSection;
