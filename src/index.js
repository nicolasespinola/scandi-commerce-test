import React from 'react';
import './styles.css';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Product from './pages/Product';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const rootElement = document.getElementById('root');
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
})
render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App selected={0} />} />
                <Route path="/selected=0" element={<App selected={0} />} />
                <Route path="/selected=1" element={<App selected={1} />} />
                <Route path="/selected=2" element={<App selected={2} />} />
                <Route path="/product" element={<Product/>} />
            </Routes>
        </BrowserRouter>
    </ApolloProvider>,
    rootElement
);
