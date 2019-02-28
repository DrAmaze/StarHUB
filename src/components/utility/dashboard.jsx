import React, { Component } from 'react';
import RepoList from '../repos/repoList';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    }
  }

  search(e) {
    this.setState({ submitted: true });
  }
  
  render() {
    const { searchTerm } = this.state;
    const repoList = <RepoList searchTerm={ searchTerm } />;
    return (
      <div>
        <div>
          <input type='text'
            placeholder='Search GitHub by Username'
            required
            onChange={ e => this.setState({ searchTerm: e.target.value }) } />
        </div>

        <div>
          { repoList }
        </div>
      </div>
    )
  }
}

export default Dashboard;