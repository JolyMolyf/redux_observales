import { combineReducers } from 'redux'
import todos from './todos';
import employees from './employees';

export default combineReducers({
  todos,
  emp: employees,

})
