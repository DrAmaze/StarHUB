import * as actions from '../../actions/repoActions';

describe('Repo Actions: ', () => {
  it('should create an action to receive repos', () => {
    const repos = {
      'total_count': 2,
      'incomplete_results': false,
      'items': [
        { 'id': 3081286 },
        { 'id': 2345873 }
      ]
    };
    const expectedAction = {
      type: actions.RECEIVE_REPOS,
      repos
    };
    expect(actions.receiveRepos(repos)).toEqual(expectedAction);
  });

  it('should create an action to receive a single repo', () => {
    const repo = {
      'total_count': 1,
      'incomplete_results': false,
      'items': [
        { 'id': 3081286 },
      ]
    };
    const expectedAction = {
      type: actions.RECEIVE_REPO,
      repo
    };
    expect(actions.receiveRepo(repo)).toEqual(expectedAction);
  });

  it('should create an action to clear search results', () => {
    const expectedAction = {
      type: actions.CLEAR_SEARCH,
    };
    expect(actions.clearSearch()).toEqual(expectedAction);
  });
});