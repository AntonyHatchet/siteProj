import React, {Component} from 'react';

import IconButton from 'material-ui/IconButton';

import Games from 'material-ui/svg-icons/av/games';
import WebApp from 'material-ui/svg-icons/av/web';
import Mobile from 'material-ui/svg-icons/hardware/smartphone';
import Complex from 'material-ui/svg-icons/action/important-devices';

import Offer from './Offer/Offer';

import ContactFormBase from './ContactForms/ContactFormBase';
import ContactFormMenu from './ContactForms/ContactFormMenu';

import Eye from './IconsBloks/Eye';
import EyeOff from './IconsBloks/EyeOff';
import Call from './IconsBloks/Call';

import SidePart from './SidePart'

import { SectionHeader, SectionSubheader } from 'components/Texts';

import stylesBase from './style.scss';
import stylesActive from './styleActive.scss';

const inlineStylesBase = {

    largeIcon: {
        width: "10vw",
        height: "10vw",
        color: "#fff"
    },
    mediumIcon: {
        width: "7.5vw",
        height: "7.5vw",
        color: "#fff"
    },
    medium: {
        width: "15vw",
        height: "15vw",
        position: "absolute"
    },
    midleIconAnimateBase: {
        width: "20vw",
        height: "20vw",
        position: "absolute",
        transform: "translateY(0px)",
        transition:" all 1s linear 0ms"
    },
    midleIconAnimate: {
        width: "20vw",
        height: "20vw",
        position: "absolute",
        transform: "translateY(350px)",
        transition:" all 1s linear 0ms"
    }
}

const inlineStylesActivated = {

    largeIcon: {
        width: "5vw",
        height: "5vw",
        color: "#fff",
        transition:" all 250ms linear 0ms"
    },
    large: {
        width: "10vw",
        height: "5vw",
        transition:" all 1s linear 0ms"
    },
    mediumIcon: {
        width: "2.5vw",
        height: "2.5vw",
        color: "#fff",
        transition:" all 1s linear 0ms"
    },
    medium: {
        width: "5vw",
        height: "5vw",
        transition:" all 1s linear 0ms"
    },
    small: {
        width: "4vw",
        height: "2.5vw",
        transition:" all 1s linear 0ms"
    },
    midleIconAnimateBase: {
        width: "10vw",
        height: "10vw",
        position: "absolute",
        transition:" all 1s linear 0ms"
    },
    midleIconAnimate: {
        width: "5vw",
        height: "5vw",
        position: "absolute",
        transition:" all 250ms linear 0ms"
    }
}

export default class Capabilities extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            animate: false,
            swapButton: false,
            requestCall: false,
            showContactForm: false,
            shitActivated: false,
            changeContent: false,
            offer: "shit"
        };
    }

    handleAnimate = () => {
        var that = this;

        this.setState({animate: !this.state.animate});

        setTimeout(function () {
            that.setState({swapButton: !that.state.swapButton})
        }, 2000);
    };

    requestCall = () => {
        var that = this;

        this.setState({requestCall: !this.state.requestCall});

        setTimeout(function () {
            that.setState({showContactForm: !that.state.showContactForm})
        }, 2000);
    }

    changeOffer = (context) => {
        var that = this;

        this.setState({
            shitActivated: true,
            changeContent: true
        });

        setTimeout(function () {
            that.setState({
                changeContent: false,
                offer: context
            });
        }, 1200);
    }

    render(){
        const { text, cases, video } = this.props;
        const { animate, swapButton, requestCall, toMenu, shitActivated, changeContent, offer } = this.state;

        let styles = (shitActivated)? stylesActive : stylesBase;
        let inlineStyles = (shitActivated)? inlineStylesActivated : inlineStylesBase;

        return(
            <div className={styles.capabilities}>
                <div className={styles.container}>
                    <div className={ (animate) ? styles.leftPart : styles.part } >
                        <div className={styles.maskBlock} />
                        <SidePart
                            styles={{
                                contentDirection: styles.contentUp,
                                contentContainer: styles.contentContainer,
                                iconStyle: inlineStyles.mediumIcon,
                                buttonStyle: inlineStyles.medium
                            }}
                            handleTouch={() => this.changeOffer("G∆MΞS")} 
                        >
                            <Games />
                        </SidePart>
                        <SidePart
                            styles={{
                                contentDirection: styles.contentDown,
                                contentContainer: styles.contentContainer,
                                iconStyle: inlineStyles.mediumIcon,
                                buttonStyle: inlineStyles.medium
                            }}
                            handleTouch={() => this.changeOffer("MOBỊLΞ")} 
                        >
                            <Mobile />
                        </SidePart>
                    </div>
                    <div className={ (animate) ? styles.centralPartAnimate : styles.centralPart } />
                    <div className={ (animate) ? styles.rightPart : styles.part } >
                        <div className={styles.maskBlock} />

                        <SidePart
                            styles={{
                                contentDirection: styles.contentUp,
                                contentContainer: styles.contentContainer,
                                iconStyle: inlineStyles.mediumIcon,
                                buttonStyle: inlineStyles.medium
                            }}
                            handleTouch={() => this.changeOffer("WΞB ∆PP")} 
                        >
                            <WebApp />
                        </SidePart>
                        <SidePart
                            styles={{
                                contentDirection: styles.contentDown,
                                contentContainer: styles.contentContainer,
                                iconStyle: inlineStyles.mediumIcon,
                                buttonStyle: inlineStyles.medium
                            }}
                            handleTouch={() => this.changeOffer("ϾOMPLΞX")} 
                        >
                            <Complex />
                        </SidePart>
                    </div>
                        <IconButton
                            style={(requestCall)? inlineStyles.midleIconAnimate : inlineStyles.midleIconAnimateBase}
                            disabled={requestCall}
                            onTouchTap={(animate) ? this.requestCall : this.handleAnimate}
                            className={(requestCall)? styles.centralIconAnimate : styles.centralIcon}
                        >
                            {(swapButton)? 
                                <Call styles={{
                                    container: styles.svgContainer,
                                    largeIcon: inlineStyles.largeIcon
                                }}/> 
                                : 
                                <Eye styles={{
                                    container: (animate) ? styles.svgContainerHide : styles.svgContainer,
                                    largeIcon: inlineStyles.largeIcon
                                }}/>
                            }
                        </IconButton>
                        {(shitActivated)?
                            <div className={(requestCall)? styles.centralIconBlockAnimate : styles.centralIconBlock}>
                                <IconButton
                                    style={inlineStyles.large}
                                    onTouchTap={this.requestCall}
                                >
                                    <EyeOff styles={{
                                        container: styles.svgContainer,
                                        largeIcon: inlineStyles.largeIcon
                                    }}/>
                                </IconButton>
                            </div>
                            :
                            null
                        }
                        {(shitActivated)? 
                        <ContactFormMenu styles={{
                            container: (requestCall)? styles.contactFormContainerAnimate : styles.contactFormContainer,
                            sendButtonContainer: styles.sendButtonContainer,
                            svgContainer: styles.svgContainer,
                            small: inlineStyles.small,
                            mediumIcon: inlineStyles.mediumIcon
                        }}/> 
                        : 
                        <ContactFormBase styles={{
                            container: (requestCall)? styles.contactFormContainerAnimate : styles.contactFormContainer,
                            sendButtonContainer: styles.sendButtonContainer,
                            svgContainer: styles.svgContainer,
                            small: inlineStyles.small,
                            mediumIcon: inlineStyles.mediumIcon
                        }}/>}
                </div>
                <Offer showContent={shitActivated} changeContent={changeContent} text={offer} cases={cases} video={video}/>
            </div>
        )
    }
}