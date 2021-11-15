import React from "react";
import CardImg from "./CardImg/CardImg";
import Row1 from "./Row1/Row1";
import Row2 from "./Row2/Row2";
import Row3 from "./Row3/Row3";

import classes from "./card.module.css";
const card = ({ productInfo, categoryInfo, price }) => {
  // console.log(productInfo);
  return (
    <div className={classes.card_area}>
      <div className={classes.card_img__area}>
        <CardImg src1={productInfo.img} src2={productInfo.img2} />
      </div>

      <div className={classes.cardCaption_area}>
        <div className={classes.cardCap_row1}>
          <Row1 name={productInfo.name} />
        </div>
        <div className={classes.cardCap_row2}>
          <Row2 price={price} sale={productInfo.sale} all={productInfo.all} />
        </div>
        <div className={classes.cardCap_row3}>
          <Row3 set={productInfo.set} />
        </div>
      </div>
    </div>
  );
};
export default card;

/*

          <CardContext.Consumer>
            {(context) => <CardCaption show={context.hovered} />}
          </CardContext.Consumer>


*/
