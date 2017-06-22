import React, {Component} from 'react';

import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';

import {Tabs, Tab} from 'material-ui/Tabs';
import {List, ListItem} from 'material-ui/List';

import Arrow from 'material-ui/svg-icons/av/play-arrow';
import Pages from 'material-ui/svg-icons/social/pages';

import {orangeA700, grey900, blue500} from 'material-ui/styles/colors';

import { SectionHeader, SectionSubheader, PlainText } from 'components/Texts';

import Grid from 'components/Grid';

import styles from './style.scss';


const largeIcon = {
    width: 100,
    height: 100,
    transition:" all 250ms linear 0ms"
}

const large = {
    width: 124,
    height: 124,
    transition:" all 1s linear 0ms",
    position: "absolute"
}


export default class Offer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showCase: false,
            animate: false,
            currentCase: this.props.cases[0],
            currentCaseNumber: 0,
            sideMenuOpen: false,
            rotate: 0,
            animateControls: false
        };
    }

    componentWillReceiveProps = (nextProps) => {
        const that = this;

        if(nextProps.changeContent)
            setTimeout(function () {
                that.setState({
                    showCase: false,
                    currentCase: that.props.cases[0]
                });
            }, 1200);
    }

    showCase = (context) => {
        var that = this;

        this.setState({
            animate: true,
            sideMenuOpen: false
        });

        setTimeout(function () {
            that.setState({
                currentCase: context,
                showCase: true,
                animate: false
            })

            this.v1.load();
            this.v2.load();
            this.v3.load();
            this.v4.load();
        }, 2000);
    }

    handleToggle = () => this.setState({sideMenuOpen: !this.state.sideMenuOpen});

    rotate = (value, nextCaseNumber) => {
        const that = this;

        nextCaseNumber = (nextCaseNumber > this.props.cases.length-1)?
        0 : (nextCaseNumber < 0)? this.props.cases.length-1 : nextCaseNumber;

        this.setState({
            rotate: this.state.rotate + value,
            animateControls: true,
            currentCaseNumber: nextCaseNumber
        })

        setTimeout(function () {
            that.setState({
                animateControls: false,
                currentCase: that.props.cases[nextCaseNumber]
            })
        }, 600);
    }

    render(){
        const {
            showCase,
            currentCase,
            currentCaseNumber,
            animate,
            sideMenuOpen,
            rotate,
            animateControls
        } = this.state;

        const {
            offerTitle,
            changeContent,
            showContent,
            text,
            cases,
            video,
            images,
            about
        } = this.props;

        return(
            <div className={(showContent)? styles.offerContainer : styles.offerContainerHide}>
                <Grid vertical={false} horizontal={true}/>
                <div className={(changeContent || animate)? styles.hideContent : styles.showContent }>
                    <div className={styles.backgroundContainer}>
                        {[...Array(10)].map((x, i) =>
                            <div className={styles.backgroundBlock} key={i}/>
                        )}
                    </div>
                    <div className={(showCase)? styles.contentContainerHide : styles.contentContainer}>
                        <div className={styles.contentBlock} >
                            <div className={styles.text} data-text={offerTitle}>{offerTitle}</div>
                        </div>
                        <div className={styles.contentBlock} >
                            <PlainText className={styles.plText} text={about}/>
                        </div>
                        <div className={styles.contentBlock} >
                            <div className={(animateControls)? styles.animateControls : styles.controls}>
                                <IconButton style={large} iconStyle={largeIcon} onTouchTap={() => this.rotate(90, currentCaseNumber + 1)}>
                                    <Arrow />
                                </IconButton>
                                <IconButton style={large} iconStyle={largeIcon} onTouchTap={() => this.rotate(-90, currentCaseNumber - 1)}>
                                    <Arrow />
                                </IconButton>
                            </div>
                            <div className={styles.transformationBlock} style={{transform: 'rotate3d(0,1,0,' + rotate + 'deg)'}}>
                                <div className={styles.frontSide}>
                                    <div className={styles.caseBlock} >
                                        <video ref={(video) => { this.v1 = video; }} loop muted autoPlay src={video[currentCase.video]}>
                                        </video>
                                    </div>
                                </div>
                                <div className={styles.backSide}>
                                    <div className={styles.caseBlock} >
                                        <video ref={(video) => { this.v2 = video; }} loop muted autoPlay src={video[currentCase.video]}>
                                        </video>
                                    </div>
                                </div>
                                <div className={styles.leftSide}>
                                    <div className={styles.caseBlock} >
                                        <video ref={(video) => { this.v3 = video; }} loop muted autoPlay src={video[currentCase.video]}>
                                        </video>
                                    </div>
                                </div>
                                <div className={styles.rightSide}>
                                    <div className={styles.caseBlock} >
                                        <video ref={(video) => { this.v4 = video; }} loop muted autoPlay src={video[currentCase.video]}>
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.contentBlock} style={(animateControls)? {transform: "translateY(22vw)"} : null}>
                            <div className={styles.text} data-text={currentCase.company}>{currentCase.company}</div>
                            <div className={styles.listContainer}>
                                <div className={styles.list}>
                                    <PlainText text={currentCase.comment} className={styles.plText}/>
                                </div>
                                <div className={styles.list}>
                                    {currentCase.technology.collection.map((tech, i) => (
                                            <img src={images[tech]} title={tech} key={i}/>
                                    ))}
                                </div>
                            </div>
                            <FlatButton label="Default" labelStyle={{color:"#fff"}} fullWidth={true} backgroundColor={"#000"} hoverColor={grey900}/>
                        </div>
                    </div>
                    {(showCase)? 
                        <div className={(showCase)? styles.caseContainer : styles.caseContainerHide} style={{backgroundColor: currentCase.background}}>
                            <iframe className={styles.frame} src={currentCase.link} width={window.innerWidth} height={window.innerHeight} />
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        )
    }
}