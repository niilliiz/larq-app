import React from "react";

import Title from "../../../UI/Title/Title";
import ShowCaseCard from "./ShowCaseCard/ShowCaseCard";
import Card from "./Card/Card";

import classes from "./shopRow.module.css";
const shopRow = ({ title, products }) => {
  // console.dir(products);
  let showCaseCard;
  let loadingCard;
  if (
    products.category === "general bottle" ||
    products.category === "movement bottle"
  ) {
    showCaseCard = (
      <div className={classes.shopRow_card_area}>
        <ShowCaseCard cardInfo={products.cardShowCase} />
      </div>
    );
    loadingCard = Object.keys(products.products).map((product, i) => {
      return (
        <div className={classes.shopRow_card_area} key={i}>
          <Card
            productInfo={products.products[product]}
            categoryInfo={products}
            price={products.price}
          />
        </div>
      );
    });
  } else if (products.category !== "gift sets") {
    loadingCard = Object.keys(products.products).map((product, i) => {
      return (
        <div className={classes.shopRow_card_area} key={i}>
          <Card
            productInfo={products.products[product]}
            categoryInfo={products}
            price={products.products[product].price}
          />
        </div>
      );
    });
  }

  return (
    <div>
      <h2>
        <Title classType="shopRow_title">{title}</Title>
      </h2>
      <section className={classes.shopRow_container}>
        {showCaseCard} {loadingCard}
      </section>
    </div>
  );
};
export default shopRow;
