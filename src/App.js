import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Login from './pages/Login';
import Home from './pages/Home';
import TableCompany from './components/TableCompanys';

const myColor = '#335389';

const App = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/tablecompany" component={TableCompany} />
      <Route exact path="/" component={Login} />
    </Switch>
  );
};

export default App;

