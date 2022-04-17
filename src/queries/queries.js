import { gql } from 'apollo-boost';

const getCategories = gql`
    {
        categories {
            name
            products {
                id
                name
                inStock
                gallery
                prices {
                    currency {
                        label
                        symbol
                    }
                    amount
                }
            }
        }
    }
`;

const getProduct = gql`
  query GetProduct($id: String!) {
    product(id: $id) {
    	name
      gallery
      inStock
      category
      attributes {
        type
        name
        items {
          displayValue
          value
        }
      }
      brand
    }
  }
`;

export { getCategories, getProduct };
