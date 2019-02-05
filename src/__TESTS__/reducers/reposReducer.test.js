import reducer from '../../reducers/reposReducer';
import * as actions from '../../actions/repoActions';

describe('Repos Reducer: ', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle RECEIVE_REPOS', () => {
    const repos = {
      'total_count': 2,
      'incomplete_results': false,
      'items': [
        { 'id': 3081286 },
        { 'id': 2345873 }
      ]
    };
    const repoAction = {
      type: actions.RECEIVE_REPOS,
      repos
    };
    expect(reducer({}, repoAction)).toEqual(repos);
  });

  it('should handle RECEIVE_REPO', () => {
    const repo = {
      id: 1,
      'total_count': 1,
      'incomplete_results': false,
      'items': [
        { 'id': 3081286 },
      ]
    };
    const repoAction = {
      type: actions.RECEIVE_REPO,
      repo
    };
    expect(reducer({}, repoAction)).toEqual({ [ repo.id ]: repo });
  });

  it('should handle CLEAR_SEARCH', () => {
    const repoAction = {
      type: actions.CLEAR_SEARCH,
    };
    expect(reducer({}, repoAction)).toEqual({});
  });
});