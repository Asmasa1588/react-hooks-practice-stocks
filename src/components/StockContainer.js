import React from "react";
import Stock from "./Stock";

function StockContainer({stocks,buyStock}) {
  
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((s) => {
        return <Stock name={s.name} price={s.price} onClick={()=>buyStock(s.id)} />;
      })}
      {/* render stock list here*/}
    </div>
  );
}

export default StockContainer;
