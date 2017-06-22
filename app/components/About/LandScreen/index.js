import React, {Component} from 'react';

import { SectionHeader, SectionSubheader } from 'components/Texts';

import Capabilities from 'components/About/Capabilities';

import styles from './style.scss';

export default class LandScreen extends Component {

    render(){
        const { text, video, images } = this.props;

        return(
            <div className={styles.landScreen}>
                <div className={styles.glitch} data-text="GR∆VIDΞOTS">GR∆VIDΞOTS</div> 
                <Capabilities text={text} video={video} images={images}/>
            </div>
        )
    }
}