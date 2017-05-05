import React, { Component } from 'react';
import Chunk from 'components/Chunk';

const loadBudgetContainer = () => import('containers/Space' /* webpackChunkName: "budget" */);

class Space extends Component {
  render() {
    return <Chunk load={loadBudgetContainer} />;
  }
}

export default Space;
