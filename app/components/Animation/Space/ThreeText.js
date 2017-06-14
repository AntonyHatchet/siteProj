import React from 'react';
import * as THREE from 'three';

import Font from './fonts/Roboto_Medium_Regular.json';

const { PropTypes } = React;
const meshScale = new THREE.Vector3(1, 1, 1);

export default class ThreeText extends React.Component {
  static propTypes = {
    position: PropTypes.instanceOf(THREE.Vector3).isRequired,
    quaternion: PropTypes.instanceOf(THREE.Quaternion).isRequired,
    symbol: PropTypes.string.isRequired
  };

  constructor(props, context) {
    super(props, context)

    this.font = new THREE.Font(Font);
  }
  render() {
    const {
      position,
      quaternion,
      symbol
    } = this.props;

    return (
      <mesh
        position={position}
        quaternion={quaternion}
        scale={meshScale}

        castShadow
      >
        <textGeometry
        text = {symbol}
        font = {this.font}
        size = {1}
        height = {0.2}
        />
        <meshStandardMaterial
        metalness = {1}
        // color = {0x413700}
        color = {0xffffff}
        />
      </mesh>
    );
  }
}
