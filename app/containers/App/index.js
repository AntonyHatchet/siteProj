import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from 'components/Header';
import Space from 'routes/Space';
import Budget from 'routes/Budget';
import Reports from 'routes/Reports';
import './style.scss';

const App = () => (
  <main>
    <Header />

    <Switch>
      <Route path="/space" component={Space} />
      <Route path="/budget" component={Budget} />
      <Route path="/reports" component={Reports} />
      <Redirect to="/root" />
    </Switch>
  </main>
);

export default App;
