import React, { Component } from "react";
import Aux from "../../HOC/Auxi/Auxi";
import axios from "../../axios";
import MenuContext from "../../HOC/Context/menuContext";
import Shop from "../../Components/Shop/Shop";

class ProductsBuilder extends Component {
  state = {
    products: null,
    shopMenu: false,
    error: false,
  };

  shopMenuHandler = () => {
    const newState = !this.state.shopMenu;
    this.setState({ shopMenu: newState });
  };

  componentDidMount() {
    axios
      .get(
        "https://larq-project-63735-default-rtdb.firebaseio.com/products.json"
      )
      .then((resp) => {
        this.setState({ products: resp.data });
        // console.dir(this.state.products);
      })
      .catch((err) => this.setState({ error: true }));
  }
  render() {
    return (
      <Aux>
        <MenuContext.Provider
          value={{
            shopMenu: this.state.shopMenu,
            showingShopMenu: this.shopMenuHandler,
          }}
        >
          <Shop products={this.state.products} />
        </MenuContext.Provider>
      </Aux>
    );
  }
}
export default ProductsBuilder;
