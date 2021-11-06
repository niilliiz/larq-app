import React from "react";
import ListItem from "../../../UI/ListItem/ListItem";
import Icon from "../../../UI/Icon/Icon";

import classes from "./shopList.module.css";
const shopList = (props) => {
  return (
    <div className={classes.shop_area}>
      <h3 className={classes.shop_title}>
        Shop <Icon classType="fa fa-angle-down" />
      </h3>
      <ul className={classes.shop_list}>
        <ListItem classType="dropDown_shopList"> All Products </ListItem>
        <ListItem classType="dropDown_shopList"> Gift Sets </ListItem>
        <ListItem classType="dropDown_shopList"> Travel Sleeve </ListItem>
        <ListItem classType="dropDown_shopList"> Accessories </ListItem>
      </ul>
    </div>
  );
};
export default shopList;
