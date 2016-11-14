/**
 * Created by pablolm on 7/11/16.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/app';
import Login from '../components/login/Login';

export default (
    <Route path="/" component={App}>
        <Route path="login" component={Login} />
    </Route>
);