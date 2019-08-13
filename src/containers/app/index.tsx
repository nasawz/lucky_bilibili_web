import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { FluentCustomizations } from '@uifabric/fluent-theme';
import { Customizer } from 'office-ui-fabric-react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import './MainApp.css';
import MainApp from './MainApp';
import { loadTheme } from 'office-ui-fabric-react';

export interface IAppProps {
  match;
}

loadTheme({
  palette: {
    themePrimary: '#01a0a6',
    themeLighterAlt: '#f1fbfb',
    themeLighter: '#cbeff1',
    themeLight: '#a0e2e4',
    themeTertiary: '#52c5c9',
    themeSecondary: '#17abb0',
    themeDarkAlt: '#019095',
    themeDark: '#017a7e',
    themeDarker: '#015a5d',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#bab8b7',
    neutralSecondary: '#a3a2a0',
    neutralPrimaryAlt: '#8d8b8a',
    neutralPrimary: '#323130',
    neutralDark: '#605e5d',
    black: '#494847',
    white: '#ffffff'
  }
});

function App(props: IAppProps) {
  const { match } = props;
  return (
    <Fabric>
      <Switch>
        <Route path={`${match.url}`} component={MainApp} />
      </Switch>
    </Fabric>
  );
}

export default withRouter(App);
