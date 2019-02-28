import gql from 'graphql-tag';

export const GET_REPOSITORY = gql`
  query GetRepository($login: String!, $name: String!) {
    repositoryOwner(login: $login) {
      repository(name: $name) {
        id
        name
        owner {
          login
        }
        description
        stargazers(first: 100) {
          totalCount
        }
        url
      }
    }
  }
`;

export const GET_REPOSITORIES = gql`
  query GetRepositories($login: String!) {
    repositoryOwner(login: $login) {
      repositories(first: 20) {
        totalCount
        nodes {
          id
          description
          name
          owner {
            login
          }
          url
          stargazers(first:10){
            totalCount
          }
        }
      }
    }   
  }
`;

export const STAR_REPOSITORY = gql`
  mutation StarRepository($id: ID!) {
    addStar(input: { starrableId: $id }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

// repositoryOwner:
// repositories:
// nodes: Array(20)
// 0:
// description: "the OG repository"
// id: "MDEwOlJlcG9zaXRvcnk5MzE5MzYyMg=="
// name: "hello-world"
// owner: { login: "DrAmaze", __typename: "User" }
// stargazers: { totalCount: 0, __typename: "StargazerConnection" }
// url: "https://github.com/DrAmaze/hello-world"
// __typename: "Repository"
// __proto__: Object
// 1:
// description: null
// id: "MDEwOlJlcG9zaXRvcnk5NDg1MzUzMw=="
// name: "cloud9"
// owner: { login: "DrAmaze", __typename: "User" }
// stargazers: { totalCount: 0, __typename: "StargazerConnection" }
// url: "https://github.com/DrAmaze/cloud9"
// __typename: "Repository"
// __proto__: Object
// 2:
// description: "app academy prep"
// id: "MDEwOlJlcG9zaXRvcnk5NzUzMDU5MA=="
// name: "practice-problems"
// owner: { login: "DrAmaze", __typename: "User" }
// stargazers: { totalCount: 0, __typename: "StargazerConnection" }
// url: "https://github.com/DrAmaze/practice-problems"
// __typename: "Repository"