import { Component } from "react";
import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import formatPrice from "./helpers/formatPrice";
import productData from "./data/productData";

class App extends Component {
  constructor(){
    super();

    this.state = {
      cartArr: [],
    }
  }

  handleAddToCart=(product)=>{
    let newCart = [...this.state.cartArr];
    newCart.push(product);
    this.setState({
        cartArr: newCart,
    });
  }

  render(){
    return(
      <div className="garage-sale">
        <h2 className="title">My Garage Sale</h2>
        <Products 
          handleAddToCart={this.handleAddToCart}
          productData={productData}
        />
        <Cart 
          cartArr={this.state.cartArr}
        />
        <Checkout 
          total={
            formatPrice(this.state.cartArr.reduce((total, product) => total + product.price, 0) * 1.05)
          }
        />
      </div>
    )
  }
}

export default App;
