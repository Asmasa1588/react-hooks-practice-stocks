import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, sellStock }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        //render your portfolio stocks here
        stocks.map((s) => {
          return <Stock name={s.name} price={s.price} onClick={()=>sellStock(s.id)}/>;
        })
      }
    </div>
  );
}

export default PortfolioContainer;
