import { Component } from "react";

class Cart extends Component{
    constructor(){
        super()

        this.state = {
            subtotal: 0,
            tax: 0,
            total: 0,
        }
    }

    handleAddToCart=(product)=>{
        this.setState({
            productListArr: [...this.props.productListArr, product],
        })
    }

    render(){
        return(
            <div className="cart">
                <h2>Cart</h2>
                <ul>
                    <li>Baseball Glove: $19.99</li>
                    <li>Mismatched Socks: $2.99</li>
                </ul>
                <div>
                    <h3>Subtotal: $86.03</h3>
                    <h3>Tax: $4.30</h3>
                    <h3>Total: $90.33</h3>
                </div>
            </div>
        )
    }
}

export default Cart;