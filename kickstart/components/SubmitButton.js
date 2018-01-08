import React, { Component } from 'react';
import { Button, Popup } from 'semantic-ui-react';
import web3 from '../ethereum/web3';

class SubmitButton extends Component {
  render() {
    return <Button {...this.props}>{this.props.children}</Button>;
  }
}

export default SubmitButton;
