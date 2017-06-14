import React, {Component} from 'react';

import {Tabs, Tab} from 'material-ui/Tabs';
import {teal800, deepOrange500, grey900} from 'material-ui/styles/colors';

import Offer from './Offer'
import { SectionHeader, SectionSubheader } from 'components/Texts';

import styles from './style.scss';

const tabsStyle = {
    backgroundColor: grey900,
}
const inkBarStyle ={
    backgroundColor: deepOrange500,
    height: "4px",
    marginTop: "-4px",
}

export default class Capabilities extends Component {

    render(){
        const { text } = this.props;

        return(
            <div className={styles.capabilities}>
                <SectionHeader text={text.title} />
                <Tabs tabItemContainerStyle={tabsStyle} inkBarStyle={inkBarStyle} className={styles.tabGlitch} data-text="">
                    {text.offers.map((direction, i) => (
                        <Tab key={i} label={direction.title}  style={{fontWeight: 600}} >
                            <div className={styles.gridList} >
                                {direction.collection.map((offer, i) => (
                                    <Offer key={i} index={i}  offerData={offer}/>
                                    )
                                )}
                            </div>
                        </Tab>
                     ))}
                </Tabs>                
            </div>
        )
    }
}