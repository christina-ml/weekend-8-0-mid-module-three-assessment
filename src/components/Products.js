import { Component } from "react";
import Product from "./Product";

class Products extends Component{
    // constructor(){
    //     super();
    // }

    render(){
        return(
            <div className="products">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        )
    }
}

export default Products;