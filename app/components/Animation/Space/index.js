import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';

import Text from './ThreeText';
import RotatingGeometry from './RotatingGeometry';
import PointCloud from './PointCloud';
import styles from './style.scss';

class Animation extends RotatingGeometry {
  _getMeshStates() {
    const { bodies, skyes } = this;

    return {
      bodies: this.bodies.map(({ position, quaternion, ref }) => ({
        position: new THREE.Vector3().copy(position),
        quaternion: new THREE.Quaternion().copy(quaternion),
        ref
      })),
      skyes: {
        quaternion: new THREE.Quaternion().copy(this.skyes.quaternion),
        ref: this.skyes.ref
      }
    }
  }

  _bodyRef(index, body) {
    if (body === null) {
      // dismounted
      return;
    }

    this.bodies[index].body = React3.findTHREEObject(body);
  }

  _skyRef(sky){
      if (sky === null) {
      // dismounted
      return;
    }

    this.skyes.body = React3.findTHREEObject(sky)
  }

  _updateGraphics() {
    const { bodies, skyes} = this;

    for (let i = 0; i < bodies.length; ++i) {
      const body = bodies[i];

      if (body.body) {
        body.body.position.copy(body.position);
        body.body.quaternion.copy(body.quaternion);
      }
    }

    if (skyes.body) {
      skyes.body.quaternion.copy(skyes.quaternion);
    }
  }

  _createBody(i) {
    return {
      ...super._createBody(i),

      ref: this._bodyRef.bind(this, i),
    };
  }

  _createSky() {
    return {
      ...super._createSky(),

      ref: this._skyRef.bind(this),
    };
  }

  render() {
    console.log("render")
    const {
      width,
      height,
    } = this.props;

    const {
      meshStates,
      skyState
    } = this.state;

    const d = 20;

    const cubeMeshes = meshStates.map(({ position, quaternion, ref }, i) => (<Text
      key={i}

      position={position}
      quaternion={quaternion}

      symbol = {"Gravideots"[i]}
      ref={ref}

      meshes={this.meshes}
    />));

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
        <resources>
          <boxGeometry
            resourceId="cubeGeo"

            width={1}
            height={1}
            depth={1}

            widthSegments={10}
            heightSegments={10}
          />
          <meshPhongMaterial
            resourceId="cubeMaterial"
            color={0x888888}
          />
        </resources>
        <scene
          ref="scene"
        >
          <perspectiveCamera
            ref="camera"
            name="camera"
            fov={this.fov}
            aspect={width / height}
            near={0.5}
            far={10000}

            position={this.cameraPosition}
            quaternion={this.cameraQuaternion}

            ref="camera"
          />
          <ambientLight
            color={0xffcf48}
          />
          <directionalLight
            color={0xffcf48}
            intensity={2}

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
