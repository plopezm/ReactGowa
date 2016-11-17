import { combineReducers } from 'redux';

import AuthReducer from './AuthenticationReducer';
import TablesReducer from './TablesReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  tables: TablesReducer
});

export default rootReducer;
