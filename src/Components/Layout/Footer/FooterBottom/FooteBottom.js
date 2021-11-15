import React from "react";
import FooterCopyWrite from "./FooterCopyWrite/FooterCopyWrite";
import FooterSocialLinks from "./FooterSocialLinks/FooterSocialLinks";

import classes from "./footerBottom.module.css";
const footerBottom = (props) => {
  return (
    <div className={classes.footerBottom_area}>
      <div className={classes.footerBottom_container}>
        <div className={classes.footerBottom_col}>
          <FooterCopyWrite />
        </div>
        <div className={classes.footerBottom_col}>
          <FooterSocialLinks />
        </div>
        <div className={classes.footerBottom_col}>Terms and services</div>
      </div>
    </div>
  );
};
export default footerBottom;

/* <div
          className={[classes.footerBottom_col, classes.footerBottom_col2].join(
            " "
          )}
        >
          <FooterSocialLinks />
        </div> 
*/
