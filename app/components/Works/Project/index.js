import React, { Component, PropTypes } from 'react';

import {teal800} from 'material-ui/styles/colors';

import { SectionHeader } from 'components/Texts';
import ReviewBlock from './ReviewBlock';
import ProjectPreviewBlock from './ProjectPreviewBlock';
import InfoBlock from './InfoBlock';

import styles from './style.scss';

export default class ProjectWrapper extends Component {


    render(){

        const {
            projectInfo,
            images,
            video,
            teamData
        } = this.props;

        const person = {
            name: projectInfo.reviewer.name,
            position: projectInfo.reviewer.position,
            review: projectInfo.reviewer.review,
            photo: images[projectInfo.reviewer.photo]
        }

        const isVideo = projectInfo.video;

        return(
            <content className={styles.projectWrapper} >
                <SectionHeader text={projectInfo.reviewer.company} />
                <ReviewBlock backgroundColor={teal800} personInfo={person} tasks={projectInfo.tasks} projectTeam={projectInfo.team} technology={projectInfo.technology} team={teamData} images={images}/>
                <ProjectPreviewBlock backgroundColor={'#000000'} data={video[isVideo?projectInfo.video : projectInfo.gif]} video={isVideo}/>
                <InfoBlock projectInfo={projectInfo}/>
            </content>
        )
    }
}