import React, { Component } from 'react';
import Radium from 'radium';
import { styles } from '../styles/styles';
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
        <div style={ styles.dashboard }>
          <input type='text'
            className='search'
            placeholder='Search GitHub by Username'
            required
            onChange={ e => this.setState({ searchTerm: e.target.value }) }
            style={ styles.input } />
        </div>

        <div>
          { repoList }
        </div>
      </div>
    )
  }
}

export default Radium(Dashboard);