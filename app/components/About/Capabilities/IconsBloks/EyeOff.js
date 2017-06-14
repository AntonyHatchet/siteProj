import React, {Component} from 'react';

import {teal800, deepOrange900, grey900} from 'material-ui/styles/colors';

import EyeOffIcon from 'material-ui/svg-icons/action/visibility-off';


export default class EyeOff extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {styles} = this.props;

        return(
            <div className={styles.container}>
                <EyeOffIcon  style={styles.largeIcon} />
                <EyeOffIcon  style={styles.largeIcon} hoverColor={deepOrange900} />
                <EyeOffIcon  style={styles.largeIcon} hoverColor={deepOrange900} />
                <EyeOffIcon  style={styles.largeIcon} />
            </div>
        )
    }
}