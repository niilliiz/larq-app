import React from "react";
const menuContext = React.createContext({
  dropMenu: false,
  slideMenu: false,
  cartMenu: false,
  shopMenu: false,
  showingMenu: () => {},
  showingShopMenu: () => {},
  hidingMenu: () => {},
});

export default menuContext;
