/**
 * Created by shu on 11/5/15.
 */
import "babel-polyfill";
import React from 'react';
import { render } from 'react-dom';
import Search from './components/Search';
import Fish from './components/Fish';
import Compare from './components/Compare';
import Report from './components/Report';
import Distributor from './components/Distributor';

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

render((
    <Router history={hashHistory}>
        <Route path="/" component={Search}/>
        <Route path="/fish/:id" component={Fish}/>
        <Route path="/fish/:fish1/compare/:fish2" component={Compare}/>
        <Route path="/report/:fish1/:fish2" component={Report}/>
        <Route path="/distributors/:id" component={Distributor}/>
    </Router>
), document.getElementById('container'));

