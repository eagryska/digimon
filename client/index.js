import App from './components/App';
import Home from './components/Home';
import DigiHome from './components/DigiHome'

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

require('es6-promise').polyfill();
require('isomorphic-fetch');

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
    <Route path="/Digimon" component={App}>
      <IndexRoute component={DigiHome} />
    </Route>
  </Router>
  , document.getElementById('root'));
