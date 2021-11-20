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
    console.log(allProductsList)
    console.log(productListArr)

    return(
      <div className="garage-sale">
        <h2 className="title">My Garage Sale</h2>
        <Products 
          allProductsList={this.state.allProductsList}
          productListArr={this.state.productListArr}
        />
        <Cart />
        <Checkout />
      </div>
    )
  }
}

export default App;
