import React from 'react';
import Radium from 'radium';
import { Query } from 'react-apollo';
import RepoListItem from './repoListItem';
import { GET_REPOSITORIES } from '../../actions/queries';
import Loading from '../utility/loading';
import { styles } from '../styles/styles';

class RepoList extends React.Component {
  render() {
    const searchTerm = this.props.searchTerm; 
    const errorDiv = err => <div className='error'>{ err.message }</div>
    
    const query = (login = '') => (
      <Query query={ GET_REPOSITORIES } variables={{ login }}>
        {
          ({ loading, error, data }) => {
            if (loading) return <Loading />
            if (error) return errorDiv(error);

            if (
              data &&
              data.repositoryOwner &&
              data.repositoryOwner.repositories
            ) {
              const repos = data.repositoryOwner.repositories.nodes;
              const renderingRepos = repos.map(repo =>
                <RepoListItem repository={ repo }
                  key={ repo.id }/>
              );
              const count = renderingRepos.length;
              return (
                <div>
                  <h3 style={ styles.count }>
                    Showing <p style={ styles.number }>{ count }</p> results for { searchTerm }
                  </h3>
                  <ul style={ styles.repoList } >
                    { renderingRepos }
                  </ul> 
                </div>
              )
            } else {
              return <div></div>
            }
          }
        }
      </Query>
    );
    return (
      <div className='repo-list'>
        { query(searchTerm) }
      </div>
    )
  }
}

export default Radium(RepoList);