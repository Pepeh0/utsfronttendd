import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './src/Home';
import Product from './src/Product';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/product" component={Product} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
