import React, { Component } from 'react';
import RepoList from './repos/repoList';
import Navbar from './utility/navbar';
import Footer from './utility/footer';
import './App.css';
import { createHttpLink } from 'apollo-link-http';
import { ApolloClient, ApolloLink, concat, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const authToken = 'c2bc482f1106870330b54c04e9d51ac21a077f5f';

const httpLink = createHttpLink({
  uri: 'https://api.github.com'
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: { authorization: authToken || null }
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache()
});

// This component operates as the dashboard of the single-page app
class App extends Component {
  render() {
    return (
      <ApolloProvider client={ client }>
        <div className="App">
          <header className="App-header">
            <h1>StarHUB</h1>
          </header>
          <Navbar />
          <RepoList />
          <Footer />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
