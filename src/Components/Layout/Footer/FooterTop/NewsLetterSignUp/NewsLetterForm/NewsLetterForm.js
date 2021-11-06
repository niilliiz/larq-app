import React from "react";
import InputSection from "./InputSection/InputSection";
import Button from "../../../../../UI/Button/Button";

import classes from "./newsLetterForm.module.css";
const newsLetterForm = (props) => {
  return (
    <form className={classes.form_area}>
      <InputSection />
      <Button classType="btn_newsLetter">Sign up</Button>
    </form>
  );
};
export default newsLetterForm;
