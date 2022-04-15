import React, { Component } from "react";
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getQuery = gql`
  {
    categories {
      name
      products {
        id
        name
      }
    }
  }
`;

class APIcategories extends Component {
    render(){
        console.log(this.props);
        return(
            <div>
                <ul id="a">
                    <li>a</li>
                </ul>
            </div>
        );
    }
}

export default graphql(getQuery)(APIcategories);
