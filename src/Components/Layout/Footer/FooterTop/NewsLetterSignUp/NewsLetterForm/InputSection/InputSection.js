import React from "react";
import Input from "../../../../../../UI/Input/Input";

import classes from "./inputSection.module.css";
const inputSection = (props) => {
  return (
    <div className={classes.input_area}>
      <div className={classes.input_container}>
        <div className={classes.input_innerContainer}>
          <div className={classes.input_wrapper}>
            <Input
              classType="input_newsletter"
              type="email"
              name="email"
              placeHolder="Enter your email..."
              isRequired="true"
            />
          </div>
          {/* this is the place where the error comes */}
        </div>
      </div>
    </div>
  );
};
export default inputSection;
