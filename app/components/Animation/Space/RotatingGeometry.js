import React from 'react';
import React3 from 'react-three-renderer';
import ReactDOM from 'react-dom';
import * as THREE from 'three';

import ExampleBase from './Base';
import Text from './ThreeText';

class RotatingGeometry extends ExampleBase {
  constructor(props, context) {
    super(props, context);
    
    const Word = "Gravideots";

    const d = 30;

    this.lightPosition = new THREE.Vector3(d, d, d);
    this.lightTarget = new THREE.Vector3(0, 0, 0);
    this.groundQuaternion = new THREE.Quaternion()
      .setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 2);
    this.cameraPosition = new THREE.Vector3(200, 2, 0);
    this.cameraQuaternion = new THREE.Quaternion()
      .setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);

    this.skyes = this._createSky();
    
    this.state = {
      skyState: this._getMeshStates().skyes
    };

    this.mouseX = 0;
    this.mouseY = 0;

    this.fov = 50;
  }


  _onAnimate = () => {
    this._updatePhysics();

    this._updateGraphics();
  };

  _updateGraphics() {

    this.setState({
      skyes: this._getMeshStates().skyes
    });
  }

  _updatePhysics() {
    const time = new Date().getTime();
    const skyes = this.skyes;

    //console.log("skyes", skyes)
    const sinTime = Math.sin(time * skyes.timeScale);

    skyes.quaternion.multiply(skyes.rotationDeltaPerFrame);
  }

  componentDidMount() {
    const {
      container,
    } = this.refs;

  }

  _createBodies() {
    const { bodies } = this;
    const N = bodies.length;

    for (let i = 0; i < N; ++i) {
      bodies[i] = this._createBody(i);
    }
  }

  // _createSky() {
  //   return {
  //     timeScale: 0.0001,
  //     rotationDeltaPerFrame: new THREE.Quaternion()
  //       .setFromEuler(new THREE.Euler(
  //         Math.random() * 0.003,
  //         Math.random() * 0.003,
  //         Math.random() * 0.003)),
  //     quaternion: new THREE.Quaternion().setFromAxisAngle( new THREE.Vector3( Math.random(), Math.random(), Math.random() ), Math.PI / 2 ),
  //   };
  // }

  _createSky() {
    return {
      timeScale: 0.0001,
      rotationDeltaPerFrame: new THREE.Quaternion()
        .setFromEuler(new THREE.Euler(
          Math.random() * 0.003,
          Math.random() * 0.003,
          Math.random() * 0.003)),
      quaternion: new THREE.Quaternion().setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), 10 ),
    };
  }
}

export default RotatingGeometry;
