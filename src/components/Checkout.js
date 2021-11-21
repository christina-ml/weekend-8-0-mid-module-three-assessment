import { Component } from "react";

class Checkout extends Component{
    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            creditCard: "",
            zipCode: "",
        };
    }

    handleChange=(event)=>{
        // console.log(event.target.name)
        // console.log(event.target.value)
        this.setState({
            [event.target.name]: [event.target.value],
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { zipCode, creditCard, firstName, lastName, email } = this.state;

        console.log("fn", firstName.length)
        console.log("ln", lastName.length)
        console.log("em", email.length)
        console.log("cc", creditCard.length)
        console.log("zp", zipCode.length)

        if (firstName.length === 0) {
            window.alert("Input is not valid");
            return;
        }
        if (lastName.length === 0) {
            window.alert("Input is not valid");
            return;
        }
        if (email.length === 0) {
            window.alert("Email is not valid");
            return;
        }
        if (creditCard.length != 16 || isNaN(creditCard)) {
            window.alert("Credit card number is not valid");
            return;
        }
        if (zipCode.length != 5 || isNaN(zipCode)) {
            window.alert("Zip code is not valid");
            return;
        }

        window.alert("Purchase complete" + ` ${this.props.total}`);
    };


    render(){
        // const { firstName, lastName, email, creditCard, zipCode } = this.state;
        return(
            <div className="checkout">
                <h2>Checkout</h2>
                <form id="checkout" onSubmit={this.handleSubmit}>
                    <div>
                        <label for="firstName">First Name
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                        />
                        </label>
                    </div>
                    <div>
                        <label for="lastName">Last Name
                        <input 
                            type="text" 
                            placeholder="Last Name" 
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                        </label>
                    </div>
                    <div>
                        <label for="email">Email
                        <input 
                            type="text" 
                            placeholder="Email" 
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        </label>
                    </div>
                    <div>
                        <label for="creditCard">Credit Card
                        <input 
                            type="text" 
                            placeholder="Credit Card" 
                            name="creditCard"
                            value={this.state.creditCard}
                            onChange={this.handleChange}
                        />
                        </label>
                    </div>
                    <div>
                        <label for="zipCode">Zip Code
                        <input 
                            type="text" 
                            placeholder="Zip Code" 
                            name="zipCode"
                            value={this.state.zipCode}
                            onChange={this.handleChange}
                        />
                        </label>
                    </div>
                    <div>
                        <button type="submit">Buy Now</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Checkout;