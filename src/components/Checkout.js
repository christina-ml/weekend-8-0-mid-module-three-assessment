import { Component } from "react";

class Checkout extends Component{
    // constructor(){
    //     super()
    // }

    render(){
        return(
            <div className="checkout">
                <h2>Checkout</h2>
                <form>
                    <div>
                        <label htmlFor="first-name">First Name</label><br />
                        <input type="text" placeholder="Enter First Name" />
                    </div>
                    <div>
                        <label htmlFor="last-name">Last Name</label><br />
                        <input type="text" placeholder="Enter Last Name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label><br />
                        <input type="text" placeholder="Enter Email" />
                    </div>
                    <div>
                        <label htmlFor="credit-card">Credit Card</label><br />
                        <input type="number" placeholder="Credit Card (16-digits)" />
                    </div>
                    <div>
                        <label htmlFor="zip-code">Zip Code</label><br />
                        <input type="number" placeholder="Enter Zip Code" />
                    </div>
                    <div>
                        <button>Buy Now</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Checkout;