import * as React from 'react';
import { LoadingComponentProps } from 'react-loadable';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';

export default class Loading extends React.Component<LoadingComponentProps> {
  public render() {
    return (
      <div>
        <Spinner size={SpinnerSize.large} />
      </div>
    );
  }
}
