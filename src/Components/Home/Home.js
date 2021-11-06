import React, { Component } from "react";
import ShowCase from "./ShowCase/ShowCase";
import TrendSection from "./MainSection/TrendSection/TrendSection";
import ShowSection from "./MainSection/ShowSection/ShowSection";

import classes from "./home.module.css";

class Home extends Component {
  render() {
    return (
      <div>
        <ShowCase />
        <main className={classes.home_mainArea}>
          <div>Review Bar</div>
          <TrendSection />
          <ShowSection />
        </main>
      </div>
    );
  }
}
export default Home;
