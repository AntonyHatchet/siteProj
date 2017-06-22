import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';

import styles from './style.scss';

class Lamps extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.directionalLightPosition = new THREE.Vector3(20, 0, 200);

    this.objectPositions = [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(-200, 0, 200),
      new THREE.Vector3(0, 0, 200),
      new THREE.Vector3(200, 0, 200),
      new THREE.Vector3(-400, 0, 0),
      new THREE.Vector3(-200, 0, 0),
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(200, 0, 0),
      new THREE.Vector3(400, 0, 0),

      new THREE.Vector3(-400, 0, -200),
      new THREE.Vector3(-200, 0, -200),
      new THREE.Vector3(0, 0, -200),
      new THREE.Vector3(200, 0, -200),
      new THREE.Vector3(400, 0, -200),
    ];

    this.arrowDir = new THREE.Vector3(0, 1, 0);
    this.arrowOrigin = new THREE.Vector3(0, 0, 0);

    this.scenePosition = new THREE.Vector3(0, 0, 0);

    this.state = {
      ...this.state,
      timer: Date.now() * 0.0001,
    };
  }

  _onAnimate = () => {
    this._onAnimateInternal();
  };

  _onAnimateInternal() {
    const timer = Date.now() * 0.0001;

    this.setState({
      timer,
    });
  }

  render() {
    const {
      width,
      height,
    } = this.props;

    const {
      timer,
    } = this.state;

    const objectRotation = new THREE.Euler(
      0,
      0,
      1.57
    );

    const lightRotation = new THREE.Euler(
      timer * 5,
      timer * 2.5,
      0
    );

    return (<div ref="container" className={styles.canvasContainer}>
      <React3
        width={width}
        height={height}
        antialias
        pixelRatio={window.devicePixelRatio}
        mainCamera="mainCamera"
        onAnimate={this._onAnimate}
        clearColor={0xffffff}
      >
        <resources>
          <meshLambertMaterial
            resourceId="material"
            side={THREE.DoubleSide}
            color={0xffffff}
          >
            <textureResource
              resourceId="texture"
            />
          </meshLambertMaterial>
        </resources>
        <scene>
          <perspectiveCamera
            fov={90}
            aspect={width / height}
            near={1}
            far={2000}
            lookAt={this.scenePosition}
            name="mainCamera"
            position={new THREE.Vector3(
              0,
              0,
              200
            )}
          />

          <directionalLight
            color={0xffffff}
            position={this.directionalLightPosition}
            lookAt={this.scenePosition}
            rotation={lightRotation}
          />
          <mesh
            position={this.objectPositions[0]}
            rotation={objectRotation}
          >
            <cylinderGeometry
              radiusTop={1000}
              radiusBottom={1000}
              height={10}
              radialSegments={20}
              heightSegments={40}
            />
            <materialResource
              resourceId="material"
            />
          </mesh>
          <axisHelper
            position={this.objectPositions[12]}
            size={50}
            // rotation={objectRotation}
          />
          <arrowHelper
            dir={this.arrowDir}
            origin={this.arrowOrigin}
            length={50}
            position={this.objectPositions[13]}
            // rotation={objectRotation}
          />
        </scene>
      </React3>
    </div>);
  }
}

// {cubeMeshes}
export default Lamps;
