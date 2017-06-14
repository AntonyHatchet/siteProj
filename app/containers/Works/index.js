import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getTeamData, getWorksPageText } from 'selectors/translate';
import { getImages } from 'selectors/images';
import { getVideo } from 'selectors/video';

import ScrollSection from 'components/ScrollSection';
import ScrollItem from 'components/ScrollItem';

import Project from 'components/Works/Project';

@connect(state => ({
  teamData: getTeamData(state),
  worksPageData: getWorksPageText(state),
  images: getImages(state),
  video: getVideo(state),
}))
export default class WorksContainer extends Component {
  static propTypes = {
    teamData: PropTypes.object.isRequired,
    worksPageData: PropTypes.object.isRequired,
    images: PropTypes.object.isRequired,
    video: PropTypes.object.isRequired
  };
  static defaultProps = {
    teamData: {},
    worksPageData: {},
    images: {},
    video: {}
  };
  render()
  {
    const {
      teamData,
      worksPageData,
      images,
      video
    } = this.props;

    return(
      <section>
        <ScrollSection>
          {worksPageData.collection.map((project, i) => (
            <ScrollItem key={i} >
              <Project projectInfo={project} images={images} video={video} teamData={teamData}/>
            </ScrollItem>
          ))}
        </ScrollSection>
      </section>
    )
  }
}
