import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import App from './containers/app';
import Intl from './intl';
import { store } from './store';
import { Provider as UrqlProvider, createClient } from 'urql';

export interface IRootProps {}
const client = createClient({
  url: '/api/graphql',
  fetchOptions: {
    headers: {
      'X-Parse-Application-Id': 'sd2sdfsks996ks'
    }
  }
});
export default class Root extends React.Component<IRootProps> {
  public render() {
    return (
      <Provider store={store}>
        <UrqlProvider value={client}>
          <Router>
            <Intl>
              <Switch>
                <Route path="/" component={App} />
              </Switch>
            </Intl>
          </Router>
        </UrqlProvider>
      </Provider>
    );
  }
}
