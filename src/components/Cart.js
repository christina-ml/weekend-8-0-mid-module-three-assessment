import { Component } from "react";
import formatPrice from "../helpers/formatPrice";

class Cart extends Component{
    render(){
        console.log(this.props.cartArr);
        let subtotal = this.props.cartArr.reduce((total, product) => total + product.price, 0)
        return(
            <div className="cart">
                <h2>Cart</h2>
                <ul>
                    {this.props.cartArr.map((product) => (
                        <li>
                        {product.name}: ${product.price}{" "}
                        </li>
                    ))}
                </ul>
                <div>
                    <h3>Subtotal: {formatPrice(subtotal)}</h3>
                    <h3>Tax: {formatPrice(subtotal * 0.05)}</h3>
                    <h3>Total: {formatPrice(subtotal * 1.05)}</h3>
                </div>
            </div>
        )
    }
}

export default Cart;