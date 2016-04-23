/**
 * Created by shu on 11/5/15.
 */
import React from 'react';
import { render } from 'react-dom';
import SearchPage from './components/Search';
import Fish from './components/Fish';

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

render((
    <Router history={hashHistory}>
        <Route path="/" component={SearchPage}/>
        <Route path="/fish" component={Fish}/>
    </Router>
), document.getElementById('container'));