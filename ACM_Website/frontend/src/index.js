import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './StrapiUtils/utils/apolloClient';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css'

ReactDOM.render(
    <Router>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Router>,
    document.getElementById('root')
);

