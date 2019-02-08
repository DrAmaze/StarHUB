import React from 'react';
import RepoListItem from './repoListItem';

class RepoList extends React.Component {
  render() {
    const mockRepos = [
      {
        id: 1,
        name: 'Super Cool Project'
      },
      {
        id: 2,
        name: 'Somewhat Less Cool Project'
      }
    ]

    const renderingRepos = mockRepos.map(repo => 
      <RepoListItem repo={ repo } key={ repo.id } />
    );
    const count = renderingRepos.length;
    
    return (
      <div>
        <div>Showing { count } results</div>
        <ul>
          { renderingRepos }
        </ul>
      </div>
    )
  }
}

export default RepoList;