import React, {PureComponent} from 'react';

const defaultContainer =  ({children}) => <div className="control-panel">{children}</div>;

export default class ControlPanel extends PureComponent {
  render() {
    const Container = defaultContainer;

    return (
      <Container>
        <h3 className="guide-title">Colour Guide</h3>
        <p>Green: Safe to Swim</p>
        <p>Amber: Moderately safe</p>
        <p>Red: Do not swim here</p>
        <p>More about water safety: <a href="https://watersafety.org.nz/">watersafety</a></p>
      </Container>
    );
  }
}
