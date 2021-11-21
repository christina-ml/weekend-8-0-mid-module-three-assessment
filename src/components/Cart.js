import { Component } from "react";
import formatPrice from "../helpers/formatPrice";

class Cart extends Component{
    constructor(){
        super();
        this.state = {
            subtotal: 0,
            tax: 0,
            total: 0,
        }
    }

    render(){
        let subtotal = this.props.productListArr.reduce((total, product) => total + product.price, 0)
        return(
            <div className="cart">
                <h2>Cart</h2>
                <ul>
                    {this.props.productListArr.map((product) => (
                        <li>
                        {product.name}: ${product.price}{" "}
                        </li>
                    ))}
                </ul>
                <div>
                    <h3>Subtotal: ${formatPrice(subtotal)}</h3>
                    <h3>Tax: $4.30</h3>
                    <h3>Total: $90.33</h3>
                </div>
            </div>
        )
    }
}

export default Cart;