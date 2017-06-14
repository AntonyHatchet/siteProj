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
    this.cameraPosition = new THREE.Vector3(900, 2, 0);
    this.cameraQuaternion = new THREE.Quaternion()
      .setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);
    
    const bodies = [];
    bodies.length = Word.length;

    this.bodies = bodies;
    this.skyes = this._createSky();

    this._createBodies();
    

    this.state = {
      numBodies: Word.length,
      meshStates: this._getMeshStates().bodies,
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
      meshStates: this._getMeshStates().bodies,
      skyes: this._getMeshStates().skyes
    });
  }

  _updatePhysics() {
    const time = new Date().getTime();
    const bodies = this.bodies;
    const skyes = this.skyes;

    for (let i = 0; i < bodies.length; ++i) {
      const body = bodies[i];

      const sinTime = Math.sin(time * body.timeScale);

      body.quaternion.multiply(body.rotationDeltaPerFrame);

      const { movementPerFrame } = body;

      body.position.copy(body.startPosition.clone()
        .add(movementPerFrame.clone()
          .multiplyScalar(sinTime)));
    }

      //console.log("skyes", skyes)
      const sinTime = Math.sin(time * skyes.timeScale);

      skyes.quaternion.multiply(skyes.rotationDeltaPerFrame);
  }

  componentDidMount() {
    const {
      container,
    } = this.refs;

    document.addEventListener('mousemove', this._onDocumentMouseMove, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this._onDocumentMouseMove, false);
  }

  _createBodies() {
    const { bodies } = this;
    const N = bodies.length;

    for (let i = 0; i < N; ++i) {
      bodies[i] = this._createBody(i);
    }
  }

  _createBody(i) {

    const position = new THREE.Vector3(
      840,
      25,
      -i+5);

    return {
      position,
      timeScale: 0.0005,
      startPosition: position.clone(),
      movementPerFrame: new THREE.Vector3(Math.random() * 0.005,Math.random() * 0.005,Math.random() * 0.005),
      rotationDeltaPerFrame: new THREE.Quaternion()
        .setFromEuler(new THREE.Euler(
          Math.random() * 0.001,
          Math.random() * 0.01,
          Math.random() * 0.001)),
      quaternion: new THREE.Quaternion().setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 ),
    };
  }

  _createSky() {
    return {
      timeScale: 0.0001,
      rotationDeltaPerFrame: new THREE.Quaternion()
        .setFromEuler(new THREE.Euler(
          Math.random() * 0.003,
          Math.random() * 0.003,
          Math.random() * 0.003)),
      quaternion: new THREE.Quaternion().setFromAxisAngle( new THREE.Vector3( Math.random(), Math.random(), Math.random() ), Math.PI / 2 ),
    };
  }
}

export default RotatingGeometry;
