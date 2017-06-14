import React, {Component} from 'react';

import Paper from 'material-ui/Paper';

import { SectionHeader, PlainText } from 'components/Texts';
import styles from './style.scss';


export default class Manifest extends Component {

    render(){
        const { text } = this.props;

        return(
            <div className={styles.manifest}>
                <SectionHeader text={text.title} />
                <Paper className={styles.paper} zDepth={2} rounded={false}>
                    <PlainText text={text.body} />

                </Paper>
            </div>
        )
    }
}