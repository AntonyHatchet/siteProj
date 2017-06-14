import React, { Component } from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import {Tabs, Tab} from 'material-ui/Tabs';
import Dialog from 'material-ui/Dialog';
import FlatButton  from 'material-ui/FlatButton';
import {teal800, deepOrange500, grey900} from 'material-ui/styles/colors';

import VerticalPopIn from 'components/VerticalPopIn';
import { SectionHeader, SectionSubheader } from 'components/Texts';

import Person from './Person';
import AboutPerson from './AboutPerson';


import styles from './style.scss';

const tabsStyle = {
    backgroundColor: grey900
}
const tabStyle = {
    height: "80%"
}
const inkBarStyle ={
    backgroundColor: deepOrange500,
    height: "4px",
    marginTop: "-4px",
}

export default class Team extends Component {
    state = {
        open: false,
        bio: {}
    };

    handleOpen = (bio) => {
        this.setState({open: true, bio: bio});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render(){
        const { text, images } = this.props;
        const { bio, open } = this.state;
        const actions = [
            <FlatButton
                label="Submit"
                primary={true}
                onTouchTap={this.handleClose}
            />
        ];
        return(
            <div className={styles.teamContainer}>
                <SectionHeader text={text.title} />
                <Tabs tabItemContainerStyle={tabsStyle} tabTemplateStyle={tabStyle} inkBarStyle={inkBarStyle} >
                    {text.departments.map((depart, i) => (
                        <Tab key={i} label={depart.title} style={{fontWeight: 600}}>
                            <div className={styles.gridList} >
                                {depart.peoples.map((person, i) => (
                                    <Person key={i} bio={person} image={images[person.photo]} onTouchTap={this.handleOpen} buttonText={text.aboutButton}/>
                                ))}
                            </div>
                        </Tab>
                     ))}
                </Tabs>
                <VerticalPopIn
                open={open}
                onRequestClose={this.handleClose}
                >
                    <AboutPerson bio={bio} image={images[bio.photo]}/>
                </VerticalPopIn>
            </div>
        )
    }
}