import React from "react";
import List from "../../../../UI/ListItem/ListItem";
import Icon from "../../../../UI/Icon/Icon";
import Language from "../../../../UI/Language/Language";
import MenuContext from "../../../../../HOC/Context/menuContext";

import classes from "./navItems.module.css";
const navItems = (props) => {
  return (
    <ul className={classes.nav_items}>
      <MenuContext.Consumer>
        {(context) => (
          <List
            classType="nav_list"
            mouseOver={context.showingMenu}
            mouseOut={context.hidingMenu}
          >
            Products <i className="fa fa-angle-down"> </i>
          </List>
        )}
      </MenuContext.Consumer>
      <List classType="nav_list"> Technology </List>
      <List classType="nav_list"> Sign In </List>
      <List classType="nav_list">
        En <Language />
      </List>
    </ul>
  );
};
export default navItems;
