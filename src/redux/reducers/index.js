import { combineReducers } from 'redux'
import todos from './todos';
import employees from './employees';
import userReducer from './users';
import postsReducer from './posts';
import commentsReducer from './comments';

export default combineReducers({
  todos,
  emp: employees,
  users: userReducer,
  posts: postsReducer,
  coments: commentsReducer,


})
