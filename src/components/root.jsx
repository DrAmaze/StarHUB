import React from 'react';
import { ApolloProvider } from 'react-apollo';
import App from './App';

const Root = ({ client }) => (
  <ApolloProvider client={ client }>
    <App />
  </ApolloProvider>
);

export default Root;