import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-boost';
import { ApolloClient } from 'apollo-client';
import './index.css';
// import configureStore from './store/store';
import Root from './components/root';

const httpLink = createHttpLink({
  uri: 'https://api.github.com'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

document.addEventListener('DOMContentLoaded', () => {
  // let store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root client={ client } />, root);
}); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
