/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Cart from "../../../UI/Cart/Cart";
import Logo from "../../../UI/Logo/Logo";
import MenuContext from "../../../../HOC/Context/menuContext";
import DropdownMenu from "../../ResponsiveMenu/DropDownMenu/DropDown";
import NavItems from "./NavItems/NavItems";

import classes from "./wide-header.module.css";
const wideHeader = (props) => {
  return (
    <div>
      <div className={classes.wide_header}>
        <a href="#">
          <Logo />
        </a>
        <div className={classes.header_secondCol}>
          <NavItems />
          <MenuContext.Consumer>
            {(context) => <Cart showingMenu={context.showingMenu} />}
          </MenuContext.Consumer>
        </div>
      </div>
      <MenuContext.Consumer>
        {(context) => (
          <DropdownMenu
            show={context.dropMenu}
            mouseAround={context.showingMenu}
            mouseOut={context.hidingMenu}
          />
        )}
      </MenuContext.Consumer>
    </div>
  );
};
export default wideHeader;
