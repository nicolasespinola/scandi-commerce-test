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
                        id="addButton"
                    />

                    <div style={{ overflow: 'hidden', width: '100%' }}>
                        <img
                            src={this.props.cover}
                            alt="cover"
                            className="product-cover image-hover"
                        />
                    </div>
                    <span className="product-card-title">
                        {this.props.name}
                    </span>
                    <span className="product-card-price">{`${this.props.price.currency.symbol} ${this.props.price.amount}`}</span>
                </div>

        );
    }
}
