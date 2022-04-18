import React from 'react';
import { Link } from 'react-router-dom';
import addButton from '../assets/ui/add-to.svg';

export default class ProductCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: false,
            firstDisplay: false,
        };
    }

    addToCart(e) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        let qty = 1;
        if (!cart) {
            cart = [];
            this.forceUpdate();
        } else {
            let item = cart.filter((p) => p.id === this.props.id);
            if (item.length >0) {
                qty = parseInt(item[0].quantity) + 1;
                this.forceUpdate();
            }
            
        }
        cart = cart.filter((p) => p.id !== this.props.id);
        let product = { id: this.props.id, quantity: qty };
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    render() {
        return (
            <div
                className="product-card"
                id="card"
                onMouseEnter={() => {
                    this.setState({ cart: true, firstDisplay: true });
                }}
                onMouseLeave={() => {
                    this.setState({ cart: false });
                }}
            >
                <img
                    src={addButton}
                    alt="Add to cart"
                    className={`product-card-add-img ${
                        !this.state.cart ? 'fadeOutTop' : 'fadeInTop'
                    } ${!this.state.firstDisplay ? 'hidden' : ''}`}
                    onClick={this.addToCart.bind(this)}
                    id="addButton"
                />

                <div style={{ overflow: 'hidden', width: '100%' }}>
                    <img
                        src={this.props.cover}
                        alt="cover"
                        className="product-cover image-hover"
                    />
                </div>
                <span className="product-card-title">{this.props.name}</span>
                <span className="product-card-price">{`${this.props.price.currency.symbol} ${this.props.price.amount}`}</span>
            </div>
        );
    }
}
