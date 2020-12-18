import * as React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import Main from './containers/app';
import Intl from './intl';
import { store } from './store';
import { Provider } from 'react-redux';

export interface IAppProps {
}

export default function App(props: IAppProps) {
  return (
    <Provider store={store}>
      <Router>
        <Intl>
          <Switch>
            <Route path="/" component={Main} />
          </Switch>
        </Intl>
      </Router>
    </Provider>
  );
}
