import React, {Component} from 'react';

import {teal800, deepOrange900, grey900} from 'material-ui/styles/colors';

import EyeIcon from 'material-ui/svg-icons/action/visibility';


export default class Eye extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {styles} = this.props;

        return(
            <div className={styles.container}>
                <EyeIcon  style={styles.largeIcon} />
                <EyeIcon  style={styles.largeIcon} hoverColor={deepOrange900} />
                <EyeIcon  style={styles.largeIcon} hoverColor={deepOrange900} />
                <EyeIcon  style={styles.largeIcon} />
            </div>
        )
    }
}