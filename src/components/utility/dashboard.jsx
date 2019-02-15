import React, { Component } from 'react';
import RepoList from '../repos/repoList';

class Dashboard extends Component {
  state = {
    searchTerm: '',
  }
  
  render() {
    const { searchTerm } = this.state;
    return (
      <div>
        <div>
          <input type='text'
            placeholder='Search By Repository owner'
            onChange={ e => this.setState({ searchTerm: e.target.value })} />
        </div>

        <div>
          <RepoList seachTerm={ searchTerm }/>
        </div>
      </div>
    )
  }
}

export default Dashboard;