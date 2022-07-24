import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

const sortMapper = {
  alphabetically: (stock1, stock2) => {
    return stock1.name.localeCompare(stock2.name);
  },
  price: (stock1, stock2) => {
    return stock1.price - stock2.price;
  },
};

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [stocksInPortfolio, setStocksInPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState();
  const [filterBy, setFilterBy] = useState();
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        setStocks(data);
      });
  }, []);

  const buyStock = (stockId) => {
    const foundStock = stocks.find((s) => {
      return stockId === s.id;
    });
    setStocksInPortfolio((stocks) => [...stocks, foundStock]);
  };

  const sellStock = (stockId) => {
    setStocksInPortfolio((stocks) => stocks.filter((s) => s.id !== stockId));
  };

  const sortMethod = sortMapper[sortBy];
  const filteredStocks = stocks.filter((s) => {
    if (filterBy) {
      return s.type === filterBy;
    }
    return true;
  });
  return (
    <div>
      <SearchBar
        sortBy={sortBy}
        setSortBy={setSortBy}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
            buyStock={buyStock}
            stocks={
              sortMethod ? filteredStocks.sort(sortMethod) : filteredStocks
            }
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            stocks={stocksInPortfolio}
            sellStock={sellStock}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
