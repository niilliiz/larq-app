import React from "react";
import Title from "../../../../UI/Title/Title";
import SmartCard from "./SmartCard/SmartCard";
import VideoSection from "./VideoSection/VideoSection";

import classes from "./smartSection.module.css";
const smartSection = (props) => {
  const smartCardTitle = [
    "Pure water in\n60 seconds",
    "Self-cleaning & worry-free",
  ];

  const smartCardDesc = [
    "Neutralizes up to 99.9999%* of harmful bacteria and viruses using PureVis UV-C light",
    "Intelligently activates every 2 hours to keep your water and bottle stink-free.",
  ];

  return (
    <div>
      <Title classType="title_mainSection">
        A smart <br />
        way to sip
      </Title>
      <div className={classes.smartSection_area}>
        <SmartCard
          type="firstColumn"
          title={smartCardTitle[0]}
          desc={smartCardDesc[0]}
        >
          *in Adventure Mode
        </SmartCard>
        <VideoSection />
        <SmartCard
          type="secondColumn"
          title={smartCardTitle[1]}
          desc={smartCardDesc[1]}
        >
          <a href="#" className="smartCard_anchor">
            Learn more
          </a>
        </SmartCard>
      </div>
    </div>
  );
};
export default smartSection;
