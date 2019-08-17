import * as React from 'react';
import App from '../../routes/index';
import './MainApp.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

class MainApp extends React.Component {
  public render() {
    // @ts-ignore
    const { match, location } = this.props;

    return (
      <div className="App">
        <div className="header">
          <Navbar />
        </div>
        <div className="body">
          <App match={match} />
        </div>
      </div>
    );
  }
}

export default MainApp;
