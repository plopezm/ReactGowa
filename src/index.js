import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import FastClick from 'fastclick';

import store from './core/store';
import routes from './core/router';

import App from './components/app';

FastClick.attach(document.body);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.getElementById('app'));
