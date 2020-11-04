import React from 'react';
import {
  BrowserRouter as RouterProvider,
  Switch,
  Route,
} from 'react-router-dom';

import RootRoute from './root';
import NotFound from '../pages/404NotFound';

interface RoutesProps {}

const Routes = ({}: RoutesProps) => {
  return (
    <RouterProvider>
      <Switch>
        <Route path="/" exact>
          <RootRoute />
        </Route>
        <Route path="/">
          <NotFound />
        </Route>
      </Switch>
    </RouterProvider>
  );
};

export default Routes;
