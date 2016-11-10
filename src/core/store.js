/**
 * Created by pablolm on 7/11/16.
 */
import { createStore, applyMiddleware } from 'redux';

import reducers from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

export default store;