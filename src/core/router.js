/**
 * Created by pablolm on 7/11/16.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/app';
import Login from '../components/login/Login';
import TablesOverview from '../components/home/TablesOverview';
import TableDetails from '../components/home/TableDetails';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={TablesOverview}/>
        <Route path="login" component={Login} />
        <Route path="home" component={TablesOverview}/>
        <Route path="show/:id" component={TableDetails}/>
    </Route>
);