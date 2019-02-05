export const RECEIVE_REPOS = 'RECEIVE_REPOS';
export const RECEIVE_REPO = 'RECEIVE_REPO';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const receiveRepos = repos => ({
  type: RECEIVE_REPOS,
  repos
});

export const receiveRepo = repo => ({
  type: RECEIVE_REPO,
  repo
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH
});