import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import React, { Component } from 'react';
import Radium from 'radium';
import { styles } from './styles/styles';
import Dashboard from './utility/dashboard';
import Footer from './utility/footer';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer 7e4d6869cc87eaab83c77eb6e210ec9881b75bb8`
      }
    });
  }
});

// This component operates as the dashboard of the single-page app
class App extends Component {
  render() {
    return (
      <ApolloProvider client={ client } >
        <div className='App'
          style={ styles.app }>
          <header className='App-header'
            style={ styles.header }>
            <h1>StarHUB</h1>
          </header>
          <Dashboard />
          <Footer />
        </div>
      </ApolloProvider>
    );
  }
}

export default Radium(App);
