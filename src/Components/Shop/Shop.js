import React, { Component } from "react";

import MenuContext from "../../HOC/Context/menuContext";
import ShowCase from "./ShopShowCase/ShopShowCase";
import BigMenuBar from "./ShopMenuBar/BigScreenBar/BigMenuBar";
import ShopMainSection from "./ShopMainSection/ShopMAinSection";

import classes from "./shop.module.css";
class Shop extends Component {
  render() {
    return (
      <div>
        <ShowCase />
        <div className={classes.shopMenuBar__bigScreen}>
          <div className={classes.shopMenuBar_area}>
            <MenuContext.Consumer>
              {(context) => (
                <BigMenuBar
                  show={context.shopMenu}
                  clicked={context.showingShopMenu}
                />
              )}
            </MenuContext.Consumer>
          </div>
        </div>

        <ShopMainSection products={this.props.products} />
      </div>
    );
  }
}
export default Shop;
