import React from "react";
import WideHeader from "./Wide-Header/Wide-Header";
import NarrowHeader from "./Narrow-Header/Narrow-Header";
import CartSlider from "./CartSlider/CartSlider";
import MenuContext from "../../../HOC/Context/menuContext";

import classes from "./header.module.css";
const header = (props) => {
  return (
    <div className={classes.header_section}>
      <div className="header_container">
        <WideHeader />
        <NarrowHeader />
        <MenuContext.Consumer>
          {(context) => (
            <CartSlider
              show={context.cartMenu}
              closingSlide={context.hidingMenu}
            />
          )}
        </MenuContext.Consumer>
      </div>
    </div>
  );
};
export default header;
