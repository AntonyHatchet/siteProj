import React, { Component, PropTypes } from 'react';

import Popover from 'material-ui/Popover';
import RaisedButton from 'material-ui/RaisedButton';
import {teal800} from 'material-ui/styles/colors';

import PopoverAnimation from './PopoverAnimation';

import styles from './style.scss';

export default class VerticalPopIn extends Component {

    handleRequestClose = () => {
        this.props.onRequestClose();
    };

    render(){
        const stylePopover = {
          width: "100%",
          height: "100%"
        }
        const styleCloseButton = {
          position: "absolute",
          right: "5%",
          bottom: "10%"
        }
        return(
          <div>
            <Popover
              open={this.props.open}
              onRequestClose={this.handleRequestClose}
              animation={PopoverAnimation}
              style={stylePopover}
              canAutoPosition={true}

            >
              {this.props.children}
              <RaisedButton style={styleCloseButton} labelColor="#ffffff" backgroundColor={teal800} label="Close" onTouchTap={this.handleRequestClose}/>
            </Popover>
          </div>
        )
    }
}
