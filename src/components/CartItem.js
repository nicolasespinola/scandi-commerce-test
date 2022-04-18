import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getProduct } from '../queries/queries';

class CartItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div style={{height:'120px'}}>
                <h2>Hello</h2>
                {this.props.data.loading ? <div>LOADING</div> : <div>hello</div>}
            </div>
        )
    }
}

export default graphql(getProduct, {
    options: (props) => {
        return {
            variables: {
                id: props.id,
            },
        };
    },
})(CartItem);
