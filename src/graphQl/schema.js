import gql from 'graphql-tag';

export const GET_SEARCHBAR_STATE = gql`
  {
    openSearchBar @client
  }
`;

export const TOGGLE_SEARCHBAR_STATE = gql`
    mutation {
        toggleSearchBar @client
    }
`;

export const UPLOAD_FILE = gql`
  mutation($file: Upload!) {
    singleUpload(file: $file) {
      filename
    }
  }
`;

export const UPLOAD_PRODUCT = gql`
  mutation ($name: String!, $description: String!, $price: String!
        $quantity: String!, $image: [Upload], $categoryId: ID!) {
            addProducts (
                name: $name,
                description: $description
                price: $price
                quantity: $quantity
                image: $image
                categoryId: $categoryId
            )   
                {
                    name
                    description
                    price
                    quantity
                    image
                }
    }
`;
export const GET_ALL_CATEGORIES = gql`
    query {
        getCategories {
            id
            name
        }
    }
`;

export const ADD_NEW_CATEGORY = gql`
  mutation ($name: String!) {
            addProductCategory (
                name: $name,
            )   
                {
                    id
                    name
                }
    }
`;
