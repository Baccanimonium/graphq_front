/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { ApolloProvider } from 'react-apollo';
import { onError } from 'apollo-link-error';
import { createUploadLink } from 'apollo-upload-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, Observable } from 'apollo-link';

import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import theme from './theme';
import App from './Pages/App';

import Routes from './Routes';
import LayoutStyles from './LayoutStyles';
import { resolvers, defaults } from './graphQl/resolvers';
import { typeDefs } from './graphQl/typeDefs';

const history = createBrowserHistory();

const cache = new InMemoryCache();

const request = (operation) => {
    const token = localStorage.getItem('token');
    operation.setContext({
        headers: {
            authorization: token,
        },
    });
};

const requestLink = new ApolloLink((operation, forward) => new Observable((observer) => {
    let handle;
    Promise.resolve(operation)
        .then((oper) => request(oper))
        .then(() => {
            handle = forward(operation).subscribe({
                next: observer.next.bind(observer),
                error: observer.error.bind(observer),
                complete: observer.complete.bind(observer),
            });
        })
        .catch(observer.error.bind(observer));

    return () => {
        if (handle) handle.unsubscribe();
    };
}));

const client = new ApolloClient({
    link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors) {
                console.log(graphQLErrors);
            }
            if (networkError.statusCode === 401) {
                localStorage.removeItem('token');
            }
        }),
        requestLink,
        withClientState({
            defaults,
            resolvers,
            typeDefs,
            cache,
        }),
        // new HttpLink(),
        createUploadLink({
            uri: '/graphql',
        }),
    ]),
    // link: createUploadLink({
    //             uri: '/graphql',
    //         }),
    cache,
});
// const client = new ApolloClient({
//     uri: '/graphql',
//     link: createUploadLink(),
//     cache: new InMemoryCache(),
//     fetchOptions: {
//         credentials: 'include',
//     },
//     clientState: {
//
//     },
//     request: (operation) => {
//         const token = localStorage.getItem('token');
//         operation.setContext({
//             headers: {
//                 authorization: token,
//             },
//         });
//     },
//     onError: ({ networkError }) => {
//         if (networkError) {
//             console.log('Network Error', networkError);
//         }
//         if (networkError.statusCode === 401) {
//             localStorage.removeItem('token');
//         }
//     },
// });


ReactDOM.render(
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <LayoutStyles>
                <Router history={history}>
                    <App>
                        <Routes />
                    </App>
                </Router>
            </LayoutStyles>
        </ThemeProvider>
    </ApolloProvider>,
    document.getElementById('root')
);
