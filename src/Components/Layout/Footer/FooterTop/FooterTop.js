import React from "react";
import NewsLetterSignUp from "./NewsLetterSignUp/NewsLetterSignUp";
import FooterNavigation from "./FooterNavigation/FooterNavigation";

import classes from "./footerTop.module.css";
const footerTop = (props) => {
  return (
    <div className={classes.footerTop_area}>
      <div className={classes.footerTop_container}>
        <div className={classes.newsLetter_area}>
          <NewsLetterSignUp />
        </div>
        <div className={classes.navSec_area}>
          <FooterNavigation />
        </div>
      </div>
    </div>
  );
};
export default footerTop;
