import React from "react";
import List from "../../../../UI/ListItem/ListItem";
import Icon from "../../../../UI/Icon/Icon";

import classes from "./footerSocialLinks.module.css";
const footerSocialLinks = (props) => {
  return (
    <ul className={classes.footerBottomLinks_lists}>
      <List classType="list_footerBottom_socialLinks">
        <Icon classType="fa fa-facebook"></Icon>
      </List>
      <List classType="list_footerBottom_socialLinks">
        <Icon classType="fa fa-twitter-square"></Icon>
      </List>
      <List classType="list_footerBottom_socialLinks">
        <Icon classType="fa fa-instagram"></Icon>
      </List>
      <List classType="list_footerBottom_socialLinks">
        <Icon classType="fa fa-youtube-play"></Icon>
      </List>
    </ul>
  );
};
export default footerSocialLinks;
