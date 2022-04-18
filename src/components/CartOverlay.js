import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getProduct } from '../queries/queries';
import CartItem from './CartItem';

export default class CartOverlay extends Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate(pP) {
        if(pP.items!==this.props.items){
            this.forceUpdate()
        }
    }

    render() {
        return <div className="cart-overlay" style={{height:"230px"}}>{JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')).map(p=>{
            return(
                <h2>{p.id}</h2>
            )
        })  : <h2>Oops no products found!</h2> }</div>;
    }
}


