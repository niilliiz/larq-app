import React, { Component } from "react";
import Aux from "../../HOC/Auxi/Auxi";
import ShowCase from "./ShowCase/ShowCase";
import TrendSection from "./MainSection/TrendSection/TrendSection";
import ShowSection from "./MainSection/ShowSection/ShowSection";

import classes from "./home.module.css";

class Home extends Component {
  render() {
    return (
      <Aux>
        <ShowCase />
        <main className={classes.home_mainArea}>
          <div> Review Bar </div> <TrendSection />
          <ShowSection />
        </main>
      </Aux>
    );
  }
}
export default Home;
