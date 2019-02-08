import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
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

    const FEED_QUERY = gql`
      {
        feed {
          repos {
            id
            name
            starred
            owner
            description
            url
            stargazers_count
          }
          # count
        }
      }
    `
    
    return (
      <Query query={ FEED_QUERY }>
        <ul>
          {
            ({ loading, error, data }) => {
              if (loading) return <div>Fetching</div>
              if (error) return <div>Error</div>
              console.log('THISISDADA?TA: ', data);

              const renderingRepos = data.feed.repos.map(repo =>
                <RepoListItem repo={ repo } key={ repo.id } />
              );
              const count = renderingRepos.length;
              return (
                <div>
                  { renderingRepos }
                  <div>Showing { count } results</div>
                </div>
              )
            }
          }
        </ul>
      </Query>
    )
  }
}

export default RepoList;