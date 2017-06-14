import React, {Component} from 'react';

import Paper from 'material-ui/Paper';

import Admin from 'material-ui/svg-icons/device/dvr';
import Mobile from 'material-ui/svg-icons/device/developer-mode';
import Landing from 'material-ui/svg-icons/action/important-devices';
import ProductGames from 'material-ui/svg-icons/hardware/videogame-asset';
import BusinesGames from 'material-ui/svg-icons/social/group';
import FlatButton from 'material-ui/FlatButton';

import {orangeA700, orange500, blue500} from 'material-ui/styles/colors';

import { SectionHeader, SectionSubheader, PlainText } from 'components/Texts';

import styles from './style.scss';

const style = {
    "height": "100px",
    "width": "100px"
} 
const paperStyle = {
  width: "100%",
  margin: 20,
  textAlign: 'center',
};
const icons = {
    "Admin": <Admin color={orangeA700} style={style} />,
    "Mobile": <Mobile color={orangeA700} style={style} />,
    "Landing": <Landing color={orangeA700} style={style} />,
    "ProductGames": <ProductGames color={orangeA700} style={style} />,
    "BusinesGames": <BusinesGames color={orangeA700} style={style} />
}

export default class Offer extends Component {

    render(){
        const {
            offerData,
            index
        } = this.props;

        let content;

        switch(index){
            case 0: 
            content = 
                <Paper className={styles.gridItem} zDepth={2} rounded={false} >
                    <Paper className={styles.itemBlock} zDepth={3}>
                        {icons[offerData.icon]}
                        <SectionSubheader text={offerData.title} className={styles.subheader} />
                    </Paper>
                    <div className={styles.itemBlock}>
                        <PlainText text={offerData.description} className={styles.plainText} />
                    </div>
                </Paper>
            break;
                
            case 1: 
            content =
                <Paper className={styles.gridItem} zDepth={2} rounded={false} >
                    <Paper className={styles.itemBlock} zDepth={3}>
                        <SectionSubheader text={offerData.title} className={styles.subheader} />
                        {icons[offerData.icon]}
                    </Paper>
                    <div className={styles.itemBlock}>
                        <PlainText text={offerData.description} className={styles.plainText} />
                    </div>
                </Paper>
            break;

            case 2: 
            content =
                <Paper className={styles.gridItem} zDepth={2} rounded={false} >
                    <div className={styles.itemBlock}>
                        <PlainText text={offerData.description} className={styles.plainText} />
                    </div>
                    <Paper className={styles.itemBlockRotate} zDepth={3}>
                        <div className={styles.itemRotateReverse}>
                            {icons[offerData.icon]}
                            <SectionSubheader text={offerData.title} className={styles.subheader} />
                        </div>
                    </Paper>
                </Paper>
            break;

            case 3: 
            content =
                <Paper className={styles.gridItem} zDepth={2} rounded={false} >
                    <div className={styles.itemBlock}>
                        <FlatButton>
                            <PlainText text={offerData.description} className={styles.plainText} />
                        </FlatButton>
                    </div>
                    <Paper className={styles.itemBlockRotate} zDepth={3}>
                        <div className={styles.itemRotateReverse}>
                            <SectionSubheader text={offerData.title} className={styles.subheader} />
                            {icons[offerData.icon]}
                        </div>
                    </Paper>
                </Paper>
            break;

            default:
            content = 
                <Paper className={styles.gridItem} zDepth={2} rounded={false} >
                    <Paper className={styles.itemBlock}>
                        {icons[offerData.icon]}
                        <SectionSubheader text={offerData.title} className={styles.subheader} />
                    </Paper>
                    <Paper className={styles.itemBlock}>
                        <PlainText text={offerData.description} className={styles.plainText} />
                    </Paper>
                </Paper>
            }
        return(content)
    }
}