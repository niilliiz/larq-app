import React from "react";
import FeaturedItem from "./FeaturedItem/FeaturedItem";

import classes from "./featuredList.module.css";
const featuredList = (props) => {
  const IMG = [
    "featured/bottle.jpg",
    "featured/movement.jpg",
    "featured/pitcher.jpg",
  ];
  const DESCRIPTION = [
    "Keep things chilled or hot.",
    "Ultra-lightweight & non-insulated.",
    "Pure water beyond filtration",
  ];
  const TITLE = [
    "LARQ Bottle PureVis",
    "LARQ Bottle Movement PureVis",
    "LARQ Pitcher PureVis",
  ];
  let featureSection = TITLE.map((sec, i) => {
    return (
      <FeaturedItem
        key={i}
        title={sec}
        img={IMG[i]}
        description={DESCRIPTION[i]}
      />
    );
  });
  return <div className={classes.feature_display}> {featureSection} </div>;
};
export default featuredList;
