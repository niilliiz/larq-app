import React from "react";
const menuContext = React.createContext({
  dropMenu: false,
  slideMenu: false,
  cartMenu: false,
  showingMenu: () => {},
  hidingMenu: () => {},
});

export default menuContext;
