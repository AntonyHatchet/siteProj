import React from 'react';
import * as THREE from 'three';


import Line from './Line';

const { PropTypes } = React;

class PointCloud extends React.Component {
  static propTypes = {
    quaternion: PropTypes.instanceOf(THREE.Quaternion).isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.pointCloudVertices = [];
    this.linePoints = [];
    for (let i = 0; i < 2000; i++) {
      const vertex = new THREE.Vector3();

      vertex.x = THREE.Math.randFloatSpread(200);
      vertex.y = THREE.Math.randFloatSpread(200);
      vertex.z = THREE.Math.randFloatSpread(200);

      this.pointCloudVertices.push(vertex);
    }

    for (var i=0 ; i<this.pointCloudVertices.length ; i+=2) {
        if (this.pointCloudVertices[i+1] !== undefined) {
            this.linePoints.push ([this.pointCloudVertices[i], this.pointCloudVertices[i+1]]);
        } else {
            this.linePoints.push ([this.pointCloudVertices[i]]);
        }
    }
  }

  render() {
    const {
      quaternion
    } = this.props;

    return (
      <group>
        <points
          quaternion = {quaternion}
        >
          <geometry vertices={this.pointCloudVertices}/>
          <pointsMaterial color={0xf61212} />
        </points>
        <Line quaternion={quaternion} linePoints={this.linePoints}/>
      </group>
    );
  }
}

export default PointCloud;
