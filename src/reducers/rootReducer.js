import { combineReducers } from 'redux';

import reposReducer from './reposReducer';
import errorsReducer from './errorsReducer';

export default combineReducers({
  reposReducer,
  errorsReducer
});