export const CLEAR_REPO_ERRORS = 'CLEAR_REPO_ERRORS';
export const RECEIVE_REPO_ERRORS = 'RECEIVE_REPO_ERRORS';

export const clearRepoErrors = () => ({
  type: CLEAR_REPO_ERRORS
});

export const receiveErrors = errors => ({
  type: RECEIVE_REPO_ERRORS,
  errors
});