import { Component } from "react";
import "./App.css";
import productData from "./data/productData";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

class App extends Component {
  constructor(){
    super();

    this.setState = {
      allProducts: productData,
    }
  }

  render(){
    return(
      <div className="garage-sale">
        <h2 className="title">My Garage Sale</h2>
        <Products />
        <Cart />
        <Checkout />
      </div>
    )
  }
}

export default App;
