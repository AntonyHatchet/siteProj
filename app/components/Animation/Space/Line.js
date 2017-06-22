import React from 'react';
import * as THREE from 'three';

const { PropTypes } = React;

class Line extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.currentLine = 0;
    this.tickTack();
  }

  tickTack(){
    const that = this;

    if(this.currentLine == this.props.linePoints.length - 1)
      this.currentLine = 0;

    setTimeout(function () {
        that.currentLine = that.currentLine + 1;
        that.tickTack();
    }, 100);
  }

  render() {
    const {
      linePoints,
      quaternion
    } = this.props;

    return (
      <group>
        <line
          quaternion = {quaternion}
          // solid line
        >
          <geometry vertices={linePoints[this.currentLine]}/>
          <lineBasicMaterial
            color={"#000"}
            // wireframe
          />
        </line>
        <line
          quaternion = {quaternion}
          // solid line
        >
          <geometry vertices={[linePoints[this.currentLine][1], linePoints[this.currentLine + 1][0]]}/>
          <lineBasicMaterial
            color={"#000"}
            // wireframe
          />
        </line>
        <line
          quaternion = {quaternion}
          // solid line
        >
          <geometry vertices={[linePoints[this.currentLine][1], linePoints[this.currentLine + 1][1]]}/>
          <lineBasicMaterial
            color={"#000"}
            // wireframe
          />
        </line>
      </group>
    );
  }
}

export default Line;
