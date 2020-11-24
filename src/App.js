import React, { Component } from "react";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      stocks: [],
      sorted: [],
      price: null,
      alph: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then((resp) => resp.json())
      .then((stocks) =>
        this.setState({
          stocks: stocks,
          sorted: stocks,
        })
      );
  }

  handleChange = (event) => {
    event.persist();
    let newArray = this.state.stocks.filter((stock) => {
      return stock.type === event.target.value ? stock : null;
    });
    this.setState({
      sorted: newArray,
    });
  };

  handleRadio = (event) => {
    event.persist();
    event.target.value === "Price" ? this.sortByPrice() : this.sortByName();
  };

  sortByPrice = () => {
    this.setState({
      price: true,
      alph: null,
    });
    let newArray = this.state.stocks.sort((a, b) => {
      return a.price > b.price ? -1 : 1;
    });
    this.setState({
      sorted: newArray,
    });
  };

  sortByName = () => {
    this.setState({
      price: null,
      alph: true,
    });
    let newArray = this.state.stocks.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
    this.setState({
      sorted: newArray,
    });
  };

  onCheck = (event) => {
    event.persist();
  };

  render() {
    return (
      <div>
        <Header />
        <MainContainer
          stocks={this.state.sorted}
          handleRadio={this.handleRadio}
          handleChange={this.handleChange}
          price={this.state.price}
          alph={this.state.alph}
        />
      </div>
    );
  }
}

export default App;
