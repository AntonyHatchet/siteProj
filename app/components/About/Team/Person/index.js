import React, { Component } from 'react';

import { SectionSubheader } from 'components/Texts';

import RaisedButton  from 'material-ui/RaisedButton';
import {teal800} from 'material-ui/styles/colors';

import styles from './style.scss';

export default class Person extends Component {

    openBio = () => {
        this.props.onTouchTap(this.props.bio);
    }

    render(){
        const { bio, onTouchTap, buttonText, image} = this.props;

        return(
            <div className={styles.personContainer}>
                <SectionSubheader text={bio.name} />
                <div className={styles.imgContainer}>
                    <img
                        src={image}
                    />
                </div>
                <RaisedButton  label={buttonText} backgroundColor={teal800} labelColor="#fff" className={styles.aboutButton} onTouchTap={this.openBio}/>
            </div>
        )
    }
}
