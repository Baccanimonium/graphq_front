import gql from 'graphql-tag';

export const defaults = {
    openSearchBar: false,
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
    },
};
