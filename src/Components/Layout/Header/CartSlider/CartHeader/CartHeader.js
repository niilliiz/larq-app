import React from "react";
import Button from "../../../../UI/Button/Button";
import Img from "../../../../UI/Img/Img";
import MenuContext from "../../../../../HOC/Context/menuContext";

import classes from "./cartHeader.module.css";
const cartHeader = (props) => {
  const src = "icon/close.svg";
  return (
    <div className={classes.cartHeader_container}>
      <div className={classes.cartHeader_caption}> Your Cart </div>
      <Button classType="close_icon">
        <MenuContext.Consumer>
          {(context) => (
            <Img
              src={src}
              hidingMenu={context.hidingMenu}
              classType="img_close"
            />
          )}
        </MenuContext.Consumer>
      </Button>
    </div>
  );
};
export default cartHeader;
