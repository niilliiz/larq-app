import React from "react";
import List from "../../../../../UI/ListItem/ListItem";

import classes from "./navSection.module.css";
const navSection = (props) => {
  const loadingListItem = props.list.map((li, i) => {
    return (
      <List key={i} classType="list_navFooter">
        {props.list[i]}
      </List>
    );
  });

  return (
    <div className={classes.navSection_area}>
      <div className={classes.navSection_container}>
        <h1 className={classes.navSec_title}>{props.title}</h1>
        <ul className={classes.navSec_lists}>{loadingListItem}</ul>
      </div>
    </div>
  );
};
export default navSection;
