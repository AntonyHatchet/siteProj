import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';

import Paper from 'material-ui/Paper';

import { SectionHeader, SectionSubheader } from 'components/Texts';
import VerticalPopIn from 'components/VerticalPopIn';
import Project from 'components/Works/Project';

import styles from './style.scss';


export default class Reviews extends Component {
    state = {
        open: false,
        projectInfo: {}
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };
    render(){
        const { text, images } = this.props;
        const { open } = this.state;

        return(
            <div className={styles.reviews}>
                <SectionHeader text={text.title} />
                <div className={styles.gridList} >

                </div>
                <VerticalPopIn
                open={open}
                onRequestClose={this.handleClose}
                >
                <Project/>
                </VerticalPopIn>
            </div>
        )
    }
}