import React from "react";
import FooterTop from "./FooterTop/FooterTop";
import FooterBottom from "./FooterBottom/FooteBottom";

import classes from "./footer.module.css";
const footer = (props) => {
  return (
    <div className={classes.footer_area}>
      <FooterTop />
      <FooterBottom />
    </div>
  );
};
export default footer;
