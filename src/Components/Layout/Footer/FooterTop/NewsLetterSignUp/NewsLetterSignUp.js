import React from "react";
import NewsLetterForm from "./NewsLetterForm/NewsLetterForm";

import classes from "./newsLetterSignUp.module.css";
const footerTopSignUp = (props) => {
  return (
    <div className={classes.signUp_area}>
      <div className={classes.signUp_container}>
        <div className={classes.signUp_caption}>Sign up for our newsletter</div>
        <NewsLetterForm />
      </div>
    </div>
  );
};
export default footerTopSignUp;
