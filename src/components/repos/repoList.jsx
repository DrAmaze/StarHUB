import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import RepoListItem from './repoListItem';
import { GET_REPOSITORY, GET_REPOSITORIES } from '../../queries';

class RepoList extends React.Component {
  render() {

    const name =  'noncense';
    const login =  'DrAmaze';
    
    
    const query = ({ login }) => (
      <Query query={GET_REPOSITORIES} variables={{ login }}>
          {
            ({ loading, error, data }) => {
              if (loading) return <div>Fetching</div>
              if (error) {
                console.log('THIS IS THE ERROR: ', error);
                return <div>Error</div>
              }
              console.log('THISISDATA: ', data);

              const repos = data.repositoryOwner.repositories.nodes;
              const renderingRepos = repos.map(repo =>
                <RepoListItem repository={repo} key={repo.id} />
              );
              const count = renderingRepos.length;
              return (
                <ul>
                  <div>
                    {renderingRepos}
                    <div>Showing {count} results</div>
                  </div>
                </ul> 
              )
            }
          }
      </Query>
    );
    return query({login});
  }
}

export default RepoList;