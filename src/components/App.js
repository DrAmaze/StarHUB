import React, { Component } from 'react';
import RepoList from './repos/repoList';
import Navbar from './header/navbar';
import './App.css';

// This component operates as the dashboard of the single-page app
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>StarHUB</h1>
        </header>
        <Navbar />
        <RepoList />
      </div>
    );
  }
}

export default App;
