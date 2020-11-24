import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  renderStocks = (stocks) => {
    return stocks.map((stock) => {
      return <Stock key={stock.id} stock={stock} removeFromUser={this.props.removeFromUser}/>;
    });
  };

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.renderStocks(this.props.userStocks)}
      </div>
    );
  }
}

export default PortfolioContainer;
