import React, {Component} from 'react';

import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';

import Pages from 'material-ui/svg-icons/social/pages';

import {orangeA700, orange500, blue500} from 'material-ui/styles/colors';

import { SectionHeader, SectionSubheader, PlainText } from 'components/Texts';

import styles from './style.scss';

export default class Offer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showCase: false,
            animate: false,
            currentCase: {},
            sideMenuOpen: false
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
        }, 2000);
    }

    handleToggle = () => this.setState({sideMenuOpen: !this.state.sideMenuOpen});

    render(){
        const {
            showCase,
            currentCase,
            animate,
            sideMenuOpen
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
                            <SectionHeader className={styles.text} text={text}/>
                        </div>
                        <div className={styles.contentBlock} >
                            <SectionSubheader className={styles.text} text={"Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.Почему он используется? Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться."}/>
                        </div>
                        <div className={styles.contentBlock} >
                            {cases.collection.map((x, i) =>
                                <FlatButton key={i} onTouchTap={() => this.showCase(x)} hoverColor="#8AA62F" style={{height:"auto", width: "auto", margin: 15}}>
                                    <div className={styles.caseBlock} >
                                        <video loop muted preload autoPlay>
                                            <source src={video[x.video]} type="video/mp4" />
                                        </video>
                                    </div>
                                </FlatButton>
                            )}
                        </div>
                    </div>
                    <div className={(showCase)? styles.caseContainer : styles.caseContainerHide} style={{backgroundColor: currentCase.background}}>
                        <iframe className={styles.frame} src={currentCase.link} width={window.innerWidth} height={window.innerHeight} />
                    </div>
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