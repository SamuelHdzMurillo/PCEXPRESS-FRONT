import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DeviceCards from './DeviceCards';
import LoginPage from './LoginPage';

function AppRouter() {
  return (
    <Router>
      <Route exact path="/" component={DeviceCards} />
      <Route exact path="/login" component={LoginPage} />
    </Router>
  );
}

export default AppRouter;
