import { combineReducers } from 'redux';
import AuthReducer from './AuthenticationReducer';

const rootReducer = combineReducers({
  auth: AuthReducer
});

export default rootReducer;
