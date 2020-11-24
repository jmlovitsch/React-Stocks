import React from "react";

const Stock = ({ stock, addToUser, removeFromUser }) => (
  <div>
    <div className="card" onClick={() => addToUser ? addToUser(stock):removeFromUser(stock)}>
      <div className="card-body">
        <h5 className="card-title">{stock.name}</h5>
        <p className="card-text">{stock.ticker}</p>
      </div>
    </div>
  </div>
);

export default Stock;
