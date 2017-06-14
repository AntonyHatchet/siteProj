import React, { Component, PropTypes } from 'react';


import SwipeableViews from 'react-swipeable-views';

import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import {List, ListItem} from 'material-ui/List';
import {teal700, teal800, deepOrange500} from 'material-ui/styles/colors';
import DoneIcon from 'material-ui/svg-icons/action/done';
import Avatar from 'material-ui/Avatar';

import { SectionSubheader, PlainText } from 'components/Texts';
import VerticalPopIn from 'components/VerticalPopIn';
import AboutPerson from 'components/About/Team/AboutPerson';

import styles from './style.scss';

export default class ReviewBlock extends Component {

    state = {
        popInOpen: false,
        bio: {}
    };

    getTeammate = ({department, name}) => (
        this.props.team.departments.filter((current) => {
            if(current.title === department)
                return true;
            else
                return false;

        })[0].peoples.filter((person) => {
            if(person.name === name)
                return true;
            else
                return false;
        })[0]
    )

    handleOpen = (bio) => {
        console.log(this.getTeammate(bio));
        this.setState({popInOpen: true, bio: this.getTeammate(bio)});
    };

    handleClose = () => {
        this.setState({popInOpen: false});
    };

    render(){
        const {
            backgroundColor,
            personInfo,
            tasks,
            projectTeam,
            technology,
            team,
            images
        } = this.props;
        
        const { bio, popInOpen } = this.state;

        const inlineStyles = {
            paperStyle: {
                backgroundColor: teal700
            },
            tabStyle: {
                height:"12.3vmax",
                fontSize:"1vmax"
            },
            tabItemContainerStyle: {
                backgroundColor: teal800,
                borderTop: "1px solid #fff",
                borderBottom: "2px solid #fff",
            },
            tabButton: {
                fontSize:"0.8vmax",
                height:"5vmin"
            },
            listStyle: {
                padding: 0
            },
            inkBarStyle: {
                backgroundColor: deepOrange500
            }
        }
        
        return(
            <Paper style={inlineStyles.paperStyle} className={styles.presentationBlock} zDepth={1} rounded={false} >
                <div className={styles.who}>
                    <div className={styles.imgContainer}>
                        <img src={personInfo.photo} />
                    </div>
                    <div className={styles.textContainer}>
                        <PlainText text={"“" + personInfo.review + "„"} className={styles.plainText} />
                        <PlainText text={personInfo.name +", "+ personInfo.position} className={styles.sign} />
                    </div>
                </div>
                <Tabs 
                        tabItemContainerStyle={inlineStyles.tabItemContainerStyle}
                        inkBarStyle={inlineStyles.inkBarStyle}
                        tabTemplateStyle={{height:"100%"}}
                        contentContainerStyle={{height:"80%"}}
                        style={inlineStyles.tabStyle}>
                    <Tab
                        label={tasks.title}
                        buttonStyle={inlineStyles.tabButton}
                    >
                        <List className={styles.list} style={inlineStyles.listStyle} >
                            {tasks.collection.map((task, i) => {
                                    return <ListItem  key={i} disabled={true} innerDivStyle={{padding: "0.72vmax 0.72vmax 0.72vmax 3vmax"}} className={styles.listItem} primaryText={task} leftIcon={<DoneIcon color="#ffffff" style={{height: "0.9vmax", width: "0.9vmax"}}/>} style={{color:"#ffffff", fontSize:"0.9vmax"}}/>
                            })}
                        </List>
                    </Tab>
                    <Tab
                        label={projectTeam.title}
                        buttonStyle={inlineStyles.tabButton}
                    >
                        <List className={styles.list} style={inlineStyles.listStyle}>
                            {projectTeam.collection.map((person, i) => {
                                    return <ListItem  key={i} innerDivStyle={{padding: "1vmax 1vmax 1vmax 5vmax"}} className={styles.listItem} primaryText={person.name} leftAvatar={<Avatar src={images[this.getTeammate(person).photo]} style={{height:"4vmin", width: "auto"}} />} style={{color:"#ffffff"}} onClick={() => this.handleOpen(person)} />
                            })}
                        </List>
                    </Tab>
                    <Tab
                        label={technology.title}
                        buttonStyle={inlineStyles.tabButton}
                    >
                        <List className={styles.list} style={inlineStyles.listStyle}>
                            {technology.collection.map((tech, i) => (
                                <ListItem key={i} disabled={true} className={styles.iconContainer}  style={{width: "5vmax"}} >
                                    <img className={styles.techIcon}  src={images[tech]} title={tech}/>
                                </ListItem>
                            ))}
                        </List>
                    </Tab>
                </Tabs>
                <VerticalPopIn
                open={popInOpen}
                onRequestClose={this.handleClose}
                >
                    <AboutPerson bio={bio} image={images[bio.photo]}/>
                </VerticalPopIn>
            </Paper>
        )
    }
}