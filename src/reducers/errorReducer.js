import merge from 'lodash/merge';
import {
  CLEAR_REPO_ERRORS,
  RECEIVE_REPO_ERRORS
} from '../actions/errorActions';

const _nullRepoErrors = {
  repoErrors: []
};

export default (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REPO_ERRORS:
      return merge({}, state, { repoErrors: action.errors });
    case CLEAR_REPO_ERRORS:
      return _nullRepoErrors;
    default:
      return state;
  }
};
