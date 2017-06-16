import React, {Component} from 'react';

import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';


import Arrow from 'material-ui/svg-icons/av/play-arrow';
import Pages from 'material-ui/svg-icons/social/pages';

import {orangeA700, orange500, blue500} from 'material-ui/styles/colors';

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
            currentCase: this.props.cases.collection[0],
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
                    showCase: false
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

        nextCaseNumber = (nextCaseNumber > this.props.cases.collection.length-1)?
        0 : (nextCaseNumber < 0)? this.props.cases.collection.length-1 : nextCaseNumber;

        this.setState({
            rotate: this.state.rotate + value,
            animateControls: true,
            currentCaseNumber: nextCaseNumber,
            currentCase: this.props.cases.collection[nextCaseNumber]
        })

        setTimeout(function () {
            that.setState({
                animateControls: false
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
            offerData,
            changeContent,
            showContent,
            text,
            cases,
            video
        } = this.props;

        return(
            <div className={(showContent)? styles.offerContainer : styles.offerContainerHide}>
                <div className={(changeContent || animate)? styles.hideContent : styles.showContent }>
                    <div className={styles.backgroundContainer}>
                        {[...Array(10)].map((x, i) =>
                            <div className={styles.backgroundBlock} key={i}/>
                        )}
                    </div>
                    <div className={(showCase)? styles.contentContainerHide : styles.contentContainer}>
                        <div className={styles.contentBlock} >
                            <div className={styles.text} data-text={text}>{text}</div>
                        </div>
                        <div className={styles.contentBlock} >
                            <PlainText text={"ⱢØЯΞΛΛ Ị₱§ƱΛΛ - Ξ₮Ø ₮ΞҜ§₮-Я¥ß∆, ϾĦ∆§₮Ø Ị§₱ØⱢŽƱΞΛΛ¥J V ₱ΞϾĦ∆₮Ị Ị VΞß-ƉỊŽ∆JИΞ. ⱢØЯΞΛΛ Ị₱§ƱΛΛ ¥∆VⱢ¥∆Ξ₮§¥∆ §₮∆ИƉ∆Я₮ИØJ Я¥ßØJ ƉⱢ¥∆ ₮ΞҜ§₮ØV И∆ Ɫ∆₮ỊИỊϾΞ § И∆ϾĦ∆Ɫ∆ XVỊ VΞҜ∆. V ₮Ø VЯΞΛΛ¥∆ ИΞҜỊJ ßΞŽ¥ΛΛ¥∆ИИ¥J ₱ΞϾĦ∆₮ИỊҜ §ØŽƉ∆Ɫ ßØⱢ§ĦƱ¥Ʊ ҜØⱢⱢΞҜϾỊ¥Ʊ Я∆ŽΛΛΞЯØV Ị ₣ØЯΛΛ §ĦЯỊ₣₮ØV, Ị§₱ØⱢŽƱ¥∆ ⱢØЯΞΛΛ Ị₱§ƱΛΛ ƉⱢ¥∆ Я∆§₱ΞϾĦ∆₮ҜỊ ØßЯ∆ŽϾØV."}/>
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
                                        <video ref={(video) => { this.v1 = video; }} loop muted autoPlay>
                                            <source src={video[currentCase.video]} type="video/ogg" />
                                        </video>
                                    </div>
                                </div>
                                <div className={styles.backSide}>
                                    <div className={styles.caseBlock} >
                                        <video ref={(video) => { this.v2 = video; }} loop muted autoPlay>
                                            <source src={video[currentCase.video]} type="video/ogg" />
                                        </video>
                                    </div>
                                </div>
                                <div className={styles.leftSide}>
                                    <div className={styles.caseBlock} >
                                        <video ref={(video) => { this.v3 = video; }} loop muted autoPlay>
                                            <source src={video[currentCase.video]} type="video/ogg" />
                                        </video>
                                    </div>
                                </div>
                                <div className={styles.rightSide}>
                                    <div className={styles.caseBlock} >
                                        <video ref={(video) => { this.v4 = video; }} loop muted autoPlay>
                                            <source src={video[currentCase.video]} type="video/ogg" />
                                        </video>
                                    </div>
                                </div>
                            </div>
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
                {(showCase)? 
                    <Drawer open={this.state.sideMenuOpen} docked={false} onRequestChange={(sideMenuOpen) => this.setState({sideMenuOpen})}>
                        {cases.collection.map((x, i) =>
                            <FlatButton key={i} onTouchTap={() => this.showCase(x)} style={{height:"auto", width: "100%"}}>
                                <div className={styles.drawerCaseBlock} >
                                    <video loop muted preload autoPlay>
                                        <source src={video[x.video]} type="video/mp4" />
                                    </video>
                                </div>
                            </FlatButton>
                        )}
                    </Drawer>
                    :
                    null
                }
                {(showCase)?
                    <div className={styles.drawerButton}>
                        <IconButton
                        style={{
                            position: "absolute",
                            left:0,
                            top:"calc(50vh - 60px)",
                            width: 120,
                            height: 120,
                            padding: 30,
                        }}
                        iconStyle={{
                            width: 60,
                            height: 60,
                        }}
                        onTouchTap={this.handleToggle}>
                            <Pages />
                        </IconButton>
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}