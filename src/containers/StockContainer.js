import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
    constructor(props){
        super()
        this.state={
            

        }
    }
    renderStocks = () => {
       return  this.props.stocks.map(stock => {
            return <Stock key={stock.id} stock={stock} addToUser={this.props.addToUser}/>
        })
    }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
            this.renderStocks()
             }
      </div>
    );
  }

}

export default StockContainer;
