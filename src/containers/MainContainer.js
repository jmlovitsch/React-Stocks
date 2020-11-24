import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userStocks: [],
    };
  }

  addToUser = (stock) => {
    if (!this.state.userStocks.includes(stock)) {
      let stocks = this.state.userStocks.concat(stock);
      this.setState({
        userStocks: stocks,
      });
    }
  };

  removeFromUser = (stock) => {
    let newArray = this.state.userStocks.filter((s) => {
      return stock.id !== s.id ? s : null;
    });
    this.setState({
      userStocks: newArray,
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          handleRadio={this.props.handleRadio}
          handleChange={this.props.handleChange}
          onCheck={this.props.onCheck}
          price={this.props.price}
          alph={this.props.alph}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.props.stocks}
              addToUser={this.addToUser}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              userStocks={this.state.userStocks}
              removeFromUser={this.removeFromUser}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
