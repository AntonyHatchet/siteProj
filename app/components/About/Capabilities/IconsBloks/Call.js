import React, {Component} from 'react';

import {teal800, deepOrange900, grey900} from 'material-ui/styles/colors';

import CallIcon from 'material-ui/svg-icons/communication/call';


export default class Call extends Component{

    render(){

        const {styles} = this.props;

        return(
            <div className={styles.container}>
                <CallIcon  style={styles.largeIcon} />
                <CallIcon  style={styles.largeIcon} />
                <CallIcon  style={styles.largeIcon} />
                <CallIcon  style={styles.largeIcon} />
            </div>
        )
    }
}