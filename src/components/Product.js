import { Component } from "react";

class Product extends Component{
    render(){
        return(
            <div>
                <h3>Baseball Glove</h3>
                <div>Price: $19.99</div>
                <button>Add To Cart</button>
                <img src="product" alt="product image" />
                <div>Product Description</div>
            </div>
        )
    }
}

export default Product;