import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';

import Text from './ThreeText';
import RotatingGeometry from './RotatingGeometry';
import PointCloud from './PointCloud';

import styles from './style.scss';

class Animation extends RotatingGeometry {
  _getMeshStates() {
    const { skyes } = this;

    
    return {
      skyes: {
        quaternion: new THREE.Quaternion().copy(this.skyes.quaternion),
        ref: this.skyes.ref
      }
    }
  }

  _skyRef(sky){
      if (sky === null) {
      // dismounted
      return;
    }

    this.skyes.body = React3.findTHREEObject(sky)
  }

  _updateGraphics() {
    super._updateGraphics()
    const {skyes} = this;

    if (skyes.body) {
      skyes.body.quaternion.copy(skyes.quaternion);
    }
  }

  _createSky() {
    return {
      ...super._createSky(),

      ref: this._skyRef.bind(this),
    };
  }

  render() {
    const {
      width,
      height,
    } = this.props;

    const {
      meshStates,
      skyState
    } = this.state;

    const d = 20;
    const sky = <PointCloud quaternion={skyState.quaternion} ref={skyState.ref} meshes={this.meshes} />

    return (<div
      className={styles.canvasContainer}
      ref="container"
    >
      <React3
        ref="react3"
        antialias
        mainCamera="camera"
        width={width}
        height={height}

        onAnimate={this._onAnimate}

        clearColor={0xffffff}

        gammaInput
        gammaOutput
        shadowMapEnabled
      >
        <scene
          ref="scene"
        >
          <orthographicCamera
            ref="camera"
            name="camera"
            left={width / - 2}
            right={width / 2}
            top={height / 2}
            bottom={height / -2}
            near={-200}
            far={200}

            position={this.cameraPosition}
            quaternion={this.cameraQuaternion}

            ref="camera"
          />
          <ambientLight
            color={0xffcf48}
          />
          <directionalLight
            color={0xffcf48}
            intensity={20}

            castShadow

            shadowMapWidth={1024}
            shadowMapHeight={1024}

            shadowCameraLeft={-d}
            shadowCameraRight={d}
            shadowCameraTop={d}
            shadowCameraBottom={-d}

            shadowCameraFar={3 * d}
            shadowCameraNear={d}

            position={this.lightPosition}
            lookAt={this.lightTarget}
          />
          {sky}
        </scene>
      </React3>
    </div>);
  }
}

// {cubeMeshes}
export default Animation;
