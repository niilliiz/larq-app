import React from "react";

import classes from "./shopMenuBar.module.css";
const shopMenuBar = (props) => {
  const attachedClass = props.show
    ? [classes.shopDropMenu_container, classes.shopDropMenu_open]
    : [classes.shopDropMenu_container, classes.shopDropMenu_close];
  return (
    <div className={classes.menuBar_area}>
      <ul className={classes.menuBar_container}>
        <li className={classes.menuBar_navItem}>
          <span onClick={props.clicked}>
            Bottles <i className="fa fa-angle-down"> </i>{" "}
          </span>
          <ul className={attachedClass.join(" ")}>
            <li className={classes.shopDrop_item}>
              <span className={classes.shopDrop_text}>
                LARQ Bottle PureVis™
              </span>
            </li>
            <li className={classes.shopDrop_item}>
              <span className={classes.shopDrop_text}>
                LARQ Bottle Movement PureVis™
              </span>
            </li>
          </ul>
        </li>

        <li
          className={[
            classes.menuBar_navItem,
            classes.menuBar_navItem__special,
          ].join(" ")}
        >
          <span>Gift Sets</span>
        </li>
        <li className={classes.menuBar_navItem}>
          <span>Accessories</span>
        </li>
      </ul>
    </div>
  );
};
export default shopMenuBar;

//
