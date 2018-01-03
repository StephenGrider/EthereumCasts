import React, { Component } from 'react';
import factory from '../ethereum/factory';

class CampaignsIndex extends Component {
  state = {
    campaigns: []
  };

  async componentDidMount() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    this.setState({ campaigns });
  }

  render() {
    return (
      <ul>
        <li>{this.state.campaigns[0]}</li>
      </ul>
    );
  }
}

export default CampaignsIndex;
