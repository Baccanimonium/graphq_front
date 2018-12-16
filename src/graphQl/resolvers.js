/* eslint-disable no-undef */
import gql from 'graphql-tag';
import { GET_CART_STATE } from './schema';
import { CART } from '../config';

export const defaults = {
    openSearchBar: false,
    cart: [],
};

export const resolvers = {
    Mutation: {
        toggleSearchBar: (_, variables, { cache }) => {
            const query = gql`
                query openSearchBar {
                    openSearchBar @client 
                }
            `;
            const { openSearchBar } = cache.readQuery({ query });
            const data = {
                openSearchBar: !openSearchBar,
            };
            cache.writeQuery({ query, data });
            return null;
        },
        addProductInCart: (_, { id, quantity }, { cache }) => {
            const query = gql`
                query cart {
                    cart @client 
                }
            `;
            const { cart } = cache.readQuery({ query });
            if (id) {
                const newCart = [...cart, { id, quantity }];
                localStorage.setItem(CART, JSON.stringify(newCart));
                cache.writeQuery({ query, data: { cart: newCart } });
            } else {
                const newCart = JSON.parse((localStorage.getItem('cart')));
                if (newCart) {
                    cache.writeQuery({ query, data: { cart: newCart } });
                }
            }

            return null;
        },
        removeProductFromCart: (_, { id }, { cache }) => {
            const query = gql`
                query cart {
                    cart @client 
                }
            `;
            const { cart } = cache.readQuery({ query });
            const newCart = cart.filter(({ id: itemId }) => itemId !== id);
            localStorage.setItem(CART, JSON.stringify(newCart));
            cache.writeQuery({ query, data: { cart: newCart } });
            return null;
        },
    },
};
