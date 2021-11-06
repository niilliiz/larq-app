import React from "react";
import FeaturedList from "../FeaturedList/FeaturedList";
import SlideNavList from "./SlideNavList/SlideNavList";
import CountrySwitcher from "./CountrySwitcher/CountrySwticher";
import CopyRight from "./CopyRight/Copyright";

import classes from "./slideMenu.module.css";
const slideMenu = (props) => {
  let classAttached = props.isShown
    ? [classes.slideMenu_area, classes.slide_open]
    : [classes.slideMenu_area, classes.slide_close];
  return (
    <div className={classAttached.join(" ")}>
      <FeaturedList />
      <SlideNavList />
      <CountrySwitcher />
      <CopyRight />
    </div>
  );
};
export default slideMenu;
