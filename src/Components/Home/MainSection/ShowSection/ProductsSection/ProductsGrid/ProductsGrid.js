import React from "react";
import GridElement from "./GridElement/GridElement";

import classes from "./productsGrid.module.css";
const productsGrid = (props) => {
  const CLASSTYPE = [
    ["grid_bigImage", "grid_1"],
    ["grid_smallImage", "grid_2"],
    ["grid_smallImage", "grid_3"],
    ["grid_smallImage", "grid_4"],
    ["grid_smallImage", "grid_5"],
    ["grid_bigImage", "grid_6"],
  ];
  const IMAGES = [
    "showProducts/img1.jpg",
    "showProducts/img2.jpg",
    "showProducts/img3.jpg",
    "showProducts/img4.jpg",
    "showProductsSection/img5.mp4",
    "showProducts/img6.jpg",
  ];
  const TITLE = [
    "LARQ Bottle PureVis",
    "",
    "",
    "",
    "",
    "LARQ Bottle Movement PureVis",
  ];
  const FEATURES = ["24 hrs cold & 12 hot", "", "", "", "", "light as air"];
  const MORE = ["Learn more", "", "", "", "", "Learn more"];

  let loadGridElements = IMAGES.map((img, i) => {
    return (
      <GridElement
        src={img}
        key={i}
        title={TITLE[i]}
        feature={FEATURES[i]}
        more={MORE[i]}
        classType={CLASSTYPE[i]}
      />
    );
  });
  return <div className={classes.showProducts_grid}>{loadGridElements}</div>;
};
export default productsGrid;
