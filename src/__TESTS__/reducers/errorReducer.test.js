import reducer from '../../reducers/errorReducer';
import * as actions from '../../actions/errorActions';

describe('Error Reducer: ', () => {
  const _null = [];

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(_null);
  });

  it('should handle CLEAR_REPO_ERRORS', () => {
    const _nullRepoErrors = { repoErrors: _null };
    const clearAction = {
      type: actions.CLEAR_REPO_ERRORS
    };
    expect(reducer({}, clearAction)).toEqual(_nullRepoErrors);
  });

  it('should handle RECEIVE_REPO_ERRORS', () => {
    const errors = 'Repo Not Found';
    const repoAction = {
      type: actions.RECEIVE_REPO_ERRORS,
      errors
    };
    expect(reducer({}, repoAction)).toEqual({ repoErrors: errors });
  });
});