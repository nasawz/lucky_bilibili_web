import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import loadable from 'react-loadable';
import LoadingComponent from '@components/loading';

export interface IRoutesProps {
  match: any;
}

const Home = loadable({
  loader: () => import(/* webpackChunkName: "home" */ './home'),
  loading: LoadingComponent
});

export default class Routes extends React.Component<IRoutesProps> {
  public render() {
    let { match } = this.props;
    return (
      <div className="content">
        <Switch>
          <Redirect exact from={`${match.url}/`} to={`${match.url}home`} />
          <Route path={`${match.url}home`} component={Home} />
        </Switch>
      </div>
    );
  }
}
