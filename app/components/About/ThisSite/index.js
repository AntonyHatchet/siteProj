import React, {Component} from 'react';

import Paper from 'material-ui/Paper';

import { SectionHeader, SectionSubheader } from 'components/Texts';
import styles from './style.scss';


export default class ThisSite extends Component {

    render(){
        const { text } = this.props;

        return(
            <div className={styles.thisSite}>
                <SectionHeader text={text.title} />
                <SectionSubheader text="dd" />
            </div>
        )
    }
}