import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { FluentCustomizations } from '@uifabric/fluent-theme';
import { Customizer } from 'office-ui-fabric-react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import './MainApp.css';
import MainApp from './MainApp';

export interface IAppProps {
  match;
}

function App(props: IAppProps) {
  const { match } = props;
  return (
    <Customizer {...FluentCustomizations}>
      <Fabric>
        <Switch>
          <Route path={`${match.url}`} component={MainApp} />
        </Switch>
      </Fabric>
    </Customizer>
  );
}

export default withRouter(App);
