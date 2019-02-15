import React, { Component } from 'react';
import RepoList from '../repos/repoList';

class Dashboard extends Component {
  state = {
    searchTerm: '',
    submitted: false
  }

  search(e) {
    this.setState({ submitted: true });
  }
  
  render() {
    const { searchTerm, submitted } = this.state;
    const repoList = submitted ? <RepoList searchTerm={ searchTerm } /> : 'search for something!';
    return (
      <div>
        <div>
          <input type='text'
            placeholder='Search By Repository owner'
            onChange={ e => this.setState({ searchTerm: e.target.value }) } />
          <button
            onClick={ e => this.search(e) }>
            Search</button>
        </div>

        <div>
          { repoList }
        </div>
      </div>
    )
  }
}

export default Dashboard;