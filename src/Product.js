import React from 'react';
import potato from './images/potato.jpg'

class Product extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);
    }

    addProduct(product) {
        this.props.addProduct(product);
    }

    render() {
        
        return (
            <div className="product-holder">
                <div className="img-holder"><img src={this.props.image} width="100" height="100"></img></div>
                <div className="name">{this.props.name}</div>
                <div className="prize">{this.props.prize}</div>
                {/* <div className="prize">qt: {this.props.quantity}</div> */}
                <div className="add-to-cart" onClick={(e) => this.addProduct(this.props)}>Add to Cart</div>
            </div>
        )
    }
}

export default Product