import { Component } from "react";
import "./App.css";
import productData from "./data/productData";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

class App extends Component {
  constructor(){
    super();

    this.state = {
      allProductsList: productData,
      productListArr: [],
    }
  }

  render(){
    const { allProductsList, productListArr } = this.state;
    console.log("from-app.js:", allProductsList)
    console.log("from-app.js:", productListArr)

    return(
      <div className="garage-sale">
        <h2 className="title">My Garage Sale</h2>
        <Products 
          allProductsList={this.state.allProductsList}
          productListArr={this.state.productListArr}
        />
        <Cart 
          productListArr={this.state.productListArr}
        />
        <Checkout />
      </div>
    )
  }
}

export default App;
