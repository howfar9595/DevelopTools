import React from 'react';
import { Switch, Route } from 'react-router';
import routes from '../constants/routes';

import HomePage from '../containers/HomePage';
import CounterPage from '../containers/CounterPage';
import BaseLayout from './Layouts/BaseLayout';
import TeableStructure from './Pages/TableStructure'

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <BaseLayout Component={Component} rest={props}></BaseLayout>
    )}
  />
);

export default () => (
  <div>
    <Switch>
      <PublicRoute path={routes.COUNTER} component={TeableStructure} />
      <PublicRoute path={routes.HOME} component={HomePage} />
      <PublicRoute path={routes.HOME} component={HomePage} />

    </Switch>
  </div>
);
