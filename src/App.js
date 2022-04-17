import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider} from 'react-apollo';
import Home from './pages/Home.jsx'
// apollo client setup
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
})


class App extends Component {
    constructor(props) {
      super(props)
    }
    render() {
        return (
            <ApolloProvider client={client}>
              <Home selected={this.props.selected}/>
            </ApolloProvider>
        );
    }
}

export default (App);
