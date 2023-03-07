import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';

ReactDOM.hydrate(
  <Router>
      <Route path="/">
        <Home />
      </Route>
  </Router>,
  document.getElementById('root')
);
