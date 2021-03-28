import counterReducer from './counterReducer.js';
import usersReducer from './usersReducer.js';
import { combineReducers } from 'redux';
export default combineReducers({
  counterState: counterReducer,
  usersState: usersReducer,
});
