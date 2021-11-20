import { Component } from "react";
import "./App.css";
import productData from "./data/productData";

class App extends Component {
  constructor(){
    super();

    this.setState = {

    }
  }

  render(){
    return(
      <div>
        <h1>My Garage Sale</h1>
        <Products />
        <Cart />
        <Checkout />
      </div>
    )
  }
}

export default App;
