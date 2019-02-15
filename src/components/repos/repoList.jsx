import React from 'react';
import { Query } from 'react-apollo';
import RepoListItem from './repoListItem';
import { GET_REPOSITORIES } from '../../actions/queries';

class RepoList extends React.Component {
  render() {
    const searchTerm = this.props.searchTerm; 
    const query = login => (
      <Query query={ GET_REPOSITORIES } variables={{ login }}>
        {
          ({ loading, error, data }) => {
            console.log('HEREH', login);
            if (loading) return <div>Fetching</div>
            if (error) {
              return <div>{ error.message }</div>
            }
            console.log('THISISDATA: ', data);
            
            const repos = data.repositoryOwner.repositories.nodes;
            const renderingRepos = repos.map(repo =>
              <RepoListItem repository={ repo } key={ repo.id } />
              );
              const count = renderingRepos.length;
            return (
              <ul>
                <div>
                  <h3>Showing { count } results for { searchTerm }</h3>
                  { renderingRepos }
                </div>
              </ul> 
            )
          }
        }
      </Query>
    );
    return (
      <div>
        { query(searchTerm) }
      </div>
    )
  }
}

export default RepoList;