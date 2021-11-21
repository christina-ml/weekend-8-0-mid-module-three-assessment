import { Component } from "react";

class Products extends Component{
    render(){
        let productListArr = this.props.allProductsList.map((product)=>{
            return (
              <div className="product-card">
                <h3>{product.name}</h3>
                <div>Price: ${product.price.toFixed(2)}</div>
                <button type="submit" onClick={()=>this.props.handleAddToCart(product)}>Add To Cart</button>
                <img src={product.img} alt={product.name} />
                <div>{product.description}</div>
              </div>
            )
          })

        return(
            <div className="products">
                {productListArr}
            </div>
        )
    }
}

export default Products;