import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { ApolloProvider, Query } from 'react-apollo';
import NavBar from './components/NavBar';

// apollo client setup
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
});


class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
              <NavBar/>
            </ApolloProvider>
        );
    }
}

export default App;
