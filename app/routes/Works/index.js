import React, { Component } from 'react';
import Chunk from 'components/Chunk';

const loadWorksContainer = () => import('containers/Works' /* webpackChunkName: "works" */);

class Works extends Component {
  render() {
    return <Chunk load={loadWorksContainer} />;
  }
}

export default Works;
