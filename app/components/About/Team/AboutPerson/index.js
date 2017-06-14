import React, { Component } from 'react';

import { SectionHeader, SectionSubheader, PlainText } from 'components/Texts';

import RaisedButton  from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Badge from 'material-ui/Badge';
import {cyan500, red50} from 'material-ui/styles/colors';

import styles from './style.scss';

export default class AboutPerson extends Component {

    render(){
        const { bio, onTouchTap, image } = this.props;

        return(
            <div className={styles.aboutPersonContainer}>
                <SectionHeader text={bio.name + " — " + bio.position} className={styles.subheader}/>
                <div className={styles.wrapper}>
                    <div className={styles.imgContainer}>
                        <img
                            src={image}
                        />
                    </div>
                    <PlainText className={styles.plainText} text={bio.about}/>
                </div>
                <SectionSubheader text={bio.experience.title} className={styles.subheader}/>
                <div className={styles.wrapper}>
                    {bio.experience.collection.map((skill, i) => (
                        <Badge
                        badgeContent={skill.years}
                        primary={true}
                        key={i}
                        >
                            <Chip
                             backgroundColor={cyan500}
                             labelColor={"#ffffff"}
                             >
                                {skill.technology}
                            </Chip>
                        </Badge>
                    ))}
                    <SectionSubheader text={"Legend"} className={styles.subheader}/>
                    <Chip
                        backgroundColor={cyan500}
                        labelColor={"#ffffff"}
                        >
                        React
                    </Chip>
                    <span className={styles.legendSpan}> — технология </span>
                    <Badge
                    badgeContent={1}
                    primary={true}
                    />
                    <span className={styles.legendSpan}> — лет опыта </span>
                </div>
            </div>
        )
    }
}
