import React from "react";
import Title from "../../../UI/Title/Title";
import TrendCard from "./TrendCard/TrendCard";

import classes from "./trendSection.module.css";
const trendSection = (props) => {
  const imgSrc = [
    "trends/trend1.webp",
    "trends/trend2.webp",
    "trends/trend3.webp",
  ];
  const subTitle = [
    "LARQ Bottle PureVis™",
    "LARQ Bottle PureVis™",
    "LARQ Bottle Movement PureVis™",
  ];
  const infoTitle = ["Monaco Blue", "Obsidian Black", "White / Pebble"];
  let loadingTrendCard = infoTitle.map((title, i) => (
    <TrendCard src={imgSrc[i]} subTitle={subTitle[i]} title={title} key={i} />
  ));
  return (
    <div className={classes.trendSection_area}>
      <div className="trendSection_container">
        <Title classType="title_mainSection"> Trending Now </Title>{" "}
        <div className={classes.trendSection_shop}>
          <div className={classes.trendSection_grid}> {loadingTrendCard} </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default trendSection;
