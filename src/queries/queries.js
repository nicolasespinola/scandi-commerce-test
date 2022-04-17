import { gql } from 'apollo-boost';

const getCategories = gql`
{
  categories {
    name
    products {
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

export {getCategories};
