import React from 'react';
import { Button } from '@material-ui/core';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { Users } from './graphql/queries/Users';

export const client = new ApolloClient({
    //TODO: move to .ENV
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
});

export const App = () => {
    return (
        <ApolloProvider client={client}>
            <Button variant="contained" color="primary">
                Welcome to the React World
            </Button>
            <Users />
        </ApolloProvider>
    );
};
