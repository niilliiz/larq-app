import React from "react";
import classes from "./input.module.css";
const input = (props) => {
  return (
    <div>
      <input
        className={classes[props.classType]}
        name={props.name}
        type={props.email}
        placeholder={props.placeHolder}
        required={props.isRequired}
      />
    </div>
  );
};
export default input;
