import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import * as pages from './pages';

const globalAppSource = '/';
const title = 'belle-lin';

const routeConfig = [
  { title, path: 'index.html', component: 'Idle' },
  { title, path: 'index', component: 'Idle' },
  { title, path: 'home', component: 'Home' },
];

const SetTitleRoute = ({ title, ...rest }) => {
  if (title) {
    document.title = title;
  }
  return <Route {...rest} exact />;
};

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {routeConfig.map((item, index) => (
        <SetTitleRoute
          key={index}
          title={item.title}
          path={globalAppSource + item.path}
          component={pages[item.component]}
        />
      ))}
      <Redirect path="*" to={`${globalAppSource}index`} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
