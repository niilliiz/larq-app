import React, { Component } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MenuContext from "../../HOC/Context/menuContext";

class Layout extends Component {
  state = {
    showDropMenu: false,
    showSlideMenu: false,
    showCartMenu: false,
  };
  showMenuHandler = (e, elmnt) => {
    console.log(elmnt);
    if (elmnt === "slide") {
      this.setState({ showSlideMenu: true });
    } else if (elmnt === "cart") {
      this.setState({ showCartMenu: true });
    } else {
      this.setState({ showDropMenu: true });
    }
  };
  hideMenuHandler = () => {
    this.setState({
      showSlideMenu: false,
      showDropMenu: false,
      showCartMenu: false,
    });
  };

  render() {
    return (
      <div>
        <MenuContext.Provider
          value={{
            dropMenu: this.state.showDropMenu,
            slideMenu: this.state.showSlideMenu,
            cartMenu: this.state.showCartMenu,
            showingMenu: this.showMenuHandler,
            hidingMenu: this.hideMenuHandler,
          }}
        >
          <Header />
        </MenuContext.Provider>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
