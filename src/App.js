import React, { Component } from "react";
import Aux from "./HOC/Auxi/Auxi";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";

import "./App.css";
import ProductsBuilder from "./Container/ProductsBuilder/ProductsBuilder";
class App extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          {/* <Home /> */}
          <ProductsBuilder />
        </Layout>
      </Aux>
    );
  }
}
export default App;

/**https://www.livelarq.com**/
