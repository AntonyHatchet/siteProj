import React, {Component} from 'react';

import IconButton from 'material-ui/IconButton';

export default class SidePart extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {
            styles,
            children,
            handleTouch
        } = this.props;

        return(
            <div className={styles.contentDirection} >
                <div className={styles.contentContainer}>
                    <IconButton
                        iconStyle={styles.iconStyle}
                        style={styles.buttonStyle}
                        onTouchTap={handleTouch}
                    >
                        {children}
                    </IconButton>
                </div>
            </div>
        )
    }
}