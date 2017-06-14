import React, { Component } from 'react';
import Chunk from 'components/Chunk';

const loadAboutContainer = () => import('containers/About' /* webpackChunkName: "about" */);

class About extends Component {
  render() {
    return <Chunk load={loadAboutContainer} />;
  }
}

export default About;
