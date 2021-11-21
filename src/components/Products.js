import { Component } from "react";

class Products extends Component{
    handleAddToCart=(product)=>{
        let newCart = [...this.props.productListArr];
        newCart.push(product);
        this.setState({
            productListArr: newCart,
        })
    }

    render(){
        let productListArr = this.props.allProductsList.map((product)=>{
            this.props.productListArr.push(product.name)
            return (
              <div className="product-card">
                <h3>{product.name}</h3>
                <div>Price: ${product.price.toFixed(2)}</div>
                <button onClick={()=>this.handleAddToCart(product)}>Add To Cart</button>
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