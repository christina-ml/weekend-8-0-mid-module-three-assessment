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

    render(){
        let cartListItem = this.props.productListArr.map((product, price)=>{
            return (
                <li>{product}: ${price.toFixed(2)}</li>
            )
          })

        return(
            <div className="cart">
                <h2>Cart</h2>
                <ul>
                    {cartListItem}
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