import * as React from 'react';

export interface IHomeProps {}

export default class Home extends React.Component<IHomeProps> {
  public render() {
    return (
      <div className="container">
        <h2>Sample Page</h2>
        <div className="ContentCard">
          <h2 className="Heading">Dialog</h2>
        </div>
      </div>
    );
  }
}
