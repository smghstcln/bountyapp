import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../pages/Home';
import IssueBounty from '../pages/IssueBounty';
import {FundBounty} from '../pages/FundBounty';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Route path="/" element={<Home />} />
      <Route path="/issue" element={<IssueBounty />} />
      <Route path="/fund" element={<FundBounty />} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
