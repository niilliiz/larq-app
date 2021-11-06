/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Bar from "../../../UI/MenuBar/Bar";
import Logo from "../../../UI/Logo/Logo";
import Cart from "../../../UI/Cart/Cart";
import MenuContext from "../../../../HOC/Context/menuContext";
import SlideMenu from "../../ResponsiveMenu/SlideMenu/SlideMenu";

import classes from "./narrow-header.module.css";
const narrowHeader = (props) => {
  return (
    <div className={classes.narrowHeader_container}>
      <div className={classes.narrow_header}>
        <MenuContext.Consumer>
          {(context) => (
            <Bar
              show={context.slideMenu}
              showingMenu={context.showingMenu}
              hidingMenu={context.hidingMenu}
            />
          )}
        </MenuContext.Consumer>

        <a href="#">
          <Logo />
        </a>
        <MenuContext.Consumer>
          {(context) => <Cart showingMenu={context.showingMenu} />}
        </MenuContext.Consumer>
      </div>
      <MenuContext.Consumer>
        {(context) => <SlideMenu isShown={context.slideMenu} />}
      </MenuContext.Consumer>
    </div>
  );
};
export default narrowHeader;
