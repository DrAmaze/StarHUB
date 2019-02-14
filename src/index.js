import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-boost';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from "react-apollo";
import './index.css';
import App from './components/App'
import 'cross-fetch/polyfill';


// const httpLink = createHttpLink({
//   uri: 'https://api.github.com/graphql',
//   request: operation => {
//     operation.setContext({
//       headers: { authorization: `Bearer ${ process.env.GITHUB_TOKEN }` }
//     });
//   }
// });

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.GITHUB_TOKEN}`
      }
    });
  }
});

ReactDOM.render(
  <ApolloProvider client={client} >
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
