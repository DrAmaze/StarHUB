import * as actions from '../../actions/errorActions';

describe('Error Actions: ', () => {
  it('should create an action to clear repo errors', () => {
    const expectedAction = {
      type: actions.CLEAR_REPO_ERRORS
    };
    expect(actions.clearRepoErrors()).toEqual(expectedAction);
  });
  
  it('should create an action to receive repo errors', () => {
    const errors = 'Repo Not Found';
    const expectedAction = {
      type: actions.RECEIVE_REPO_ERRORS,
      errors
    };
    expect(actions.receiveErrors(errors)).toEqual(expectedAction);
  });
});