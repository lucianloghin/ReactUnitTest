import React from 'react';
import { Alert, Button, Collapse } from 'react-bootstrap';
import ExtraComponent from './ExtraComponent'

export default class AlertDismissable extends React.Component {
  render() {
    return (
      <Collapse in={this.props.show}>
        <Alert bsStyle="info" onDismiss={this.onDismiss}>
          <h4>
            {this.props.title}
          </h4>
          <p>
            {this.props.message};
          </p>
          <ExtraComponent />
          <p>
            <Button onClick={this.props.onDismiss}>{this.props.dismissText}</Button>
          </p>
        </Alert>
      </Collapse>
    );
  }
}
