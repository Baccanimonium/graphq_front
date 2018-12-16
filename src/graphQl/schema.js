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

export const GET_CART_STATE = gql`
  {
    cart @client
  }
`;

export const ADD_CART_ITEM = gql`
    mutation($id: ID!, $quantity: Int) {
        addProductInCart (id: $id, quantity: $quantity) @client
    }   
`;

export const REMOVE_CART_ITEM = gql`
    mutation($id: ID!, $quantity: Int) {
        removeProductFromCart (id: $id, quantity: $quantity) @client
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
    mutation ($name: String!, $description: String!, $price: String!, $colors: [String!]!
        $quantity: String!, $image: [Upload], $categoryId: ID!) {
            addProducts (
                name: $name,
                description: $description
                price: $price
                colors: $colors
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
        addProductCategory ( name: $name )   
        {
            id
            name
        }
    }
`;

export const GET_PRODUCTS = gql`
    query(
        $categoryId: ID,
        $skip: Int,
        $limit: Int,
        $price: [Int],
        $brand: [String],
        $colors: [String]
        $lastPurchase: String
        $id: [ID]
    ) {
        getProducts(
            categoryId: $categoryId,
            skip: $skip,
            limit: $limit,
            colors: $colors,
            brand: $brand,
            price: $price
            lastPurchase: $lastPurchase
            _id: $id
        ) {
            id
            name
            price
            quantity
            image
        }
    }
`;

export const GET_PRODUCT = gql`
    query($id: ID!) {
        getProduct(id: $id) {
            id
            name
            price
            quantity
            image
            colors
            description
        }
    }
`;

export const SEARCH_PRODUCTS = gql`
    query($name: String) {
        searchProducts(name: $name) {
            id
            name
            price
        }
    }
`;
