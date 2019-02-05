import merge from 'lodash/merge';
import {
  RECEIVE_REPOS,
  RECEIVE_REPO,
  CLEAR_SEARCH
} from '../actions/repoActions';


const reposReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_REPOS:
      return merge({}, action.repos);
    case RECEIVE_REPO:
      return merge(newState, {[ action.repo.id ]: action.repo });
    case CLEAR_SEARCH:
      return {};
    default:
      return state;
  }
};

export default reposReducer;