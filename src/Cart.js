import React from 'react';
class Cart extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let total = 0;
        const products = this.props.products.map((item, key) => {
            if (item.quantity > 0) {
                total = total + item.prize * item.quantity;
                console.log(total);
                
                // this.setState({ total: total })
                return (
                    <div key={item.id}>name - {item.name} quantity- {item.quantity} prize - {item.prize}</div>
                )
            }
        });
        
        return (
            <div className="cartContainer">
                <div className="cartTitle"><h3>Cart Items</h3></div>
                <div>{products}</div>
                {/* <div>Total Cost: {this.total}</div> */}
            </div>
        )
    }
}

export default Cart;