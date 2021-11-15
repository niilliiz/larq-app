import React from "react";
import List from "../../../../UI/ListItem/ListItem";
import Icon from "../../../../UI/Icon/Icon";

import classes from "./footerSocialLinks.module.css";
const footerSocialLinks = (props) => {
  return (
    <ul className={classes.footerBottomLinks_lists}>
      <List classType="list_footerBottom_socialLinks">
        <i className="fa fa-facebook"> </i>
      </List>
      <List classType="list_footerBottom_socialLinks">
        <i className="fa fa-twitter-square"> </i>
      </List>
      <List classType="list_footerBottom_socialLinks">
        <i className="fa fa-instagram"> </i>
      </List>
      <List classType="list_footerBottom_socialLinks">
        <i className="fa fa-youtube-play"> </i>
      </List>
    </ul>
  );
};
export default footerSocialLinks;
