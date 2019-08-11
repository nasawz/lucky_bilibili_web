import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import App from './containers/app';
import Intl from './intl';
import { store } from './store';

export interface IRootProps {}

export default class Root extends React.Component<IRootProps> {
  public render() {
    return (
      <Provider store={store}>
        <Router>
          <Intl>
            <Switch>
              <Route path="/" component={App} />
            </Switch>
          </Intl>
        </Router>
      </Provider>
    );
  }
}
