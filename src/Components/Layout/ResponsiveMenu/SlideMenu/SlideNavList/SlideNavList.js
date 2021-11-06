import React from "react";
import ShopList from "../../ShopList/ShopList";
import List from "../../../../UI/ListItem/ListItem";
import LangIcon from "../../../../UI/Language/Language";

import classes from "./slideNavList.module.css";
const slideNavList = (props) => {
  return (
    <ul className={classes.slideNavList_area}>
      {/* <ShopList /> */}
      <List classType="slideNavItem">
        <ShopList />
      </List>
      <List classType="slideNavItem">Technology</List>

      <List classType="slideNavItem">
        En <LangIcon />{" "}
      </List>
      <ul className={classes.slideSubItem_area}>
        <List classType="slidSubItem">My Account</List>
        <List classType="slidSubItem">Our Story</List>
        <List classType="slidSubItem">Support</List>
        <List classType="slidSubItem">Press</List>
      </ul>
    </ul>
  );
};
export default slideNavList;
