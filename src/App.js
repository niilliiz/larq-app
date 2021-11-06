import React, { Component } from "react";
import Aux from "./HOC/Auxi/Auxi";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";

import "./App.css";
class App extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <Home />
        </Layout>
      </Aux>
    );
  }
}
export default App;

/**https://www.livelarq.com**/
