import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import RepoListItem from './repoListItem';

class RepoList extends React.Component {
  render() {
    
    const GET_FEED_QUERY = gql`
      query($organization: String!, $cursor: String) {
        organization(login: $organization) {
          name
          url
          repositories(
            first: 5
            orderBy: { direction: DESC, field: STARGAZERS }
            after: $cursor
          ) {
            edges {
              node {
                ...repository
              }
            }
            pageInfo {
              endCursor
              hasNextPage
            }
          }
        }
      }
      fragment repository on Repository {
        name
        url
      }
    `;
    
    return (
      <Query query={GET_FEED_QUERY}>
          {
            ({ loading, error, data }) => {
              if (loading) return <div>Fetching</div>
              if (error) {
                console.log('THIS IS THE ERROR: ', error);
                return <div>Error</div>
              }
              console.log('THISISDATA: ', data);

              const renderingRepos = data.feed.repos.map(repo =>
                // <RepoListItem repo={repo} key={repo.id} />
                <div>
                  {repo}
                </div>
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
    )
  }
}

export default RepoList;