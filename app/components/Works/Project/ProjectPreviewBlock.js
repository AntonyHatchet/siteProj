import React, { Component, PropTypes } from 'react';

import Paper from 'material-ui/Paper';

import styles from './style.scss';

export default class ProjectPreviewBlock extends Component {

    render(){
        const {
            backgroundColor,
            data,
            video
        } = this.props;

        const style = {
            backgroundColor: backgroundColor
        }

        let content;

        if(video){
            content = <video loop="" muted="" preload="" className={styles.gifBlock} autoPlay>
                <source src={data} type="video/mp4" />
            </video>
        }else{
            content = <img className={styles.gifBlock} src={data} />
        }
        return(
            <Paper style={style} className={styles.presentationBlock} zDepth={1} rounded={false} >
                {content}
            </Paper>
        )
    }
}