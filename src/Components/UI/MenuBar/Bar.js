import React from "react";
import classes from "./bar.module.css";
import Img from "../Img/Img";
const bar = (props) => {
  const src = "logo/toggle-logo.svg";

  let menuElmnt = props.show ? (
    <div className={classes.toggle_img} onClick={props.hidingMenu}>
      <Img clicked={props.hidingMenu} src={src} classType="toggle_logo" />
    </div>
  ) : (
    <div
      className={classes.bars}
      onClick={(event) => props.showingMenu(event, "slide")}
    >
      <div> </div>
      <div> </div>
      <div></div>
    </div>
  );
  return <div>{menuElmnt}</div>;
};
export default bar;
