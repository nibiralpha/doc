import React from 'react';
import Product from "./Product";
import potato from './images/potato.jpg'
import Cart from "./Cart";

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    id: 1,
                    img: potato,
                    name: 'potato',
                    prize: 50,
                    quantity: 0
                },
                {
                    id: 2,
                    img: potato,
                    name: 'onion',
                    prize: 100,
                    quantity: 0
                },
                {
                    id: 3,
                    img: potato,
                    name: 'banana',
                    prize: 150,
                    quantity: 0
                }
            ],
            total: 0,
            cart: []
        }
    }

    addProduct(product) {
        this.setState({
            products: this.state.products.map(item => {
                if (item.id === product.id) {
                    item.quantity++;
                    return item;
                }
                return item;
            })
        })
    }

    render() {
        const products = this.state.products.map((item, key) =>
            <Product
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.img}
                prize={item.prize}
                quantity={item.quantity}
                addProduct={this.addProduct.bind(this)}
            ></Product>
        );

        return (
            <div className="container">
                {products}
                <Cart products={this.state.products}></Cart>
            </div>
        )
    }
}

export default List;