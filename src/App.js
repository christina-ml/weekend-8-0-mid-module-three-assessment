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
      cartArr: [],
    }
  }

  handleAddToCart=(product)=>{
    let newCart = [...this.state.cartArr];
    console.log(newCart);
    newCart.push(product);
    this.setState({
        cartArr: newCart,
    })
  }

  render(){
    const { allProductsList, cartArr } = this.state;
    console.log("from-app.js:", allProductsList)
    console.log("from-app.js:", cartArr)

    return(
      <div className="garage-sale">
        <h2 className="title">My Garage Sale</h2>
        <Products 
          handleAddToCart={this.handleAddToCart}
          allProductsList={this.state.allProductsList}
          cartArr={this.state.cartArr}
        />
        <Cart 
          cartArr={this.state.cartArr}
        />
        <Checkout />
      </div>
    )
  }
}

export default App;
