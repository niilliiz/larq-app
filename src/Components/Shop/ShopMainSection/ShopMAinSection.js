import React from "react";
import Spinner from "../../UI/Spinner/Spinner";
import ShopRow from "./ShopRow/ShopRow";

import classes from "./shopMAinSection.module.css";
const shopMainSection = ({ products }) => {
  let loadingShopRow = <Spinner />;
  if (products) {
    loadingShopRow = Object.keys(products).map((proKey, i) => {
      return (
        <div
          className={[classes.shop_row, classes[`shop_row_${i}`]].join(" ")}
          key={i}
        >
          <ShopRow title={products[proKey].name} products={products[proKey]} />
        </div>
      );
    });
  }

  return <main className={classes.shop_mainArea}>{loadingShopRow}</main>;
};
export default shopMainSection;
