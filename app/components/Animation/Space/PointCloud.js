import React from 'react';
import * as THREE from 'three';

const { PropTypes } = React;

class PointCloud extends React.Component {
  static propTypes = {
    quaternion: PropTypes.instanceOf(THREE.Quaternion).isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.pointCloudVertices = [];

    for (let i = 0; i < 50000; i++) {
      const vertex = new THREE.Vector3();

      vertex.x = THREE.Math.randFloatSpread(1500);
      vertex.y = THREE.Math.randFloatSpread(1500);
      vertex.z = THREE.Math.randFloatSpread(1000);

      this.pointCloudVertices.push(vertex);
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {
      quaternion
    } = this.props;
    return (<points
      quaternion = {quaternion}
      >
      <geometry vertices={this.pointCloudVertices}/>
      <pointsMaterial
        color={0x212121}
      />
    </points>);
  }
}

export default PointCloud;
