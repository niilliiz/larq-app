import React from "react";
import NavSection from "./NavSection/NavSection";

import classes from "./footerNavigation.module.css";
const footerNavigation = (props) => {
  const title = ["Help", "Shop", "About"];

  const listItem = [
    ["FAQs", "Reviews", "My Account", "Corporative Gifting", "Contact Us"],
    [
      "LARQ Bottle PureVis",
      "LARQ Bottle Movement PureVis",
      "Gift Sets",
      "Travel Sleeve",
      "Accessories",
    ],
    ["Basq Magazine", "Press", "Our story", "Technology"],
  ];
  const loadingNavSection = title.map((title, i) => {
    return <NavSection key={i} title={title} list={listItem[i]} />;
  });

  return (
    <nav className={classes.footerNav_area}>
      <div className={classes.footerNav_container}> {loadingNavSection} </div>
    </nav>
  );
};
export default footerNavigation;
