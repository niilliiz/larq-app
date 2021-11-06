import React from "react";
import Card from "./Card/Card";
const cards = (props) => {
  const IMG = [...props.img];
  const DESCRIPTION = [...props.description];
  const TITLE = [...props.title];

  return (
    <div>
      <Card img={IMG[0]} description={DESCRIPTION[0]} title={TITLE[0]} />
      <Card img={IMG[1]} description={DESCRIPTION[1]} title={TITLE[1]} />
      <Card img={IMG[2]} description={DESCRIPTION[2]} title={TITLE[2]} />
    </div>
  );
};
export default cards;
