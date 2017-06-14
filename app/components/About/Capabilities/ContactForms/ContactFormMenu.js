import React, {Component} from 'react';

import InputMask from 'react-input-mask';
import {teal800, deepOrange900, grey900} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Send from 'material-ui/svg-icons/content/send';

export default class ContactFormMenu extends Component{

        
    constructor(props) {
        super(props);
        this.state = {
            animate: false,
            swapButton: false,
            requestCall: false,
            showContactForm: false,
            shitActivated: false
        };
    }

    render(){
        const{
            styles
        } = this.props;

        return(
            <div className={styles.container}>
                <label htmlFor="name">N∆MΞ</label>
                <label htmlFor="phone">PĦONΞ</label>
                <label htmlFor="phone">SΞND</label>
                <input type="text" id="name" />
                <InputMask mask="+9 (999) 999-99-99" maskChar=" " id="phone"/>
                <IconButton
                    style={styles.small}
                    onTouchTap={this.requestCall}
                    className={styles.sendButtonContainer}
                >
                    <div className={styles.svgContainer}>
                        <Send style={styles.mediumIcon} />
                        <Send style={styles.mediumIcon} />
                        <Send style={styles.mediumIcon} />
                        <Send style={styles.mediumIcon} />
                    </div>
                </IconButton>
            </div>
        )
    }
}