import { createHttpLink } from 'apollo-link-http';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import React, { Component } from 'react';
import RepoList from './repos/repoList';
import Navbar from './utility/navbar';
import Footer from './utility/footer';
import './App.css';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer 8df36c579bbab40f7019770bb253446ed9283e2c`
      }
    });
  }
});

// This component operates as the dashboard of the single-page app
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client} >
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
