import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import RegisterCompany from './pages/RegisterCompany';
import NotFound from './pages/NotFound';
import CompanysCard from './components/CompanysCard';

const App = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/register" component={RegisterCompany} />
      <Route exact path="/empresas/:id" component={CompanysCard} />
      <Route exact path="/" component={Login} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
