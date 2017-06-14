import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


import ScrollSection from 'components/ScrollSection';
import ScrollItem from 'components/ScrollItem';

import Animation from 'components/Animation/Space';

import Team from 'components/About/Team';
import LandScreen from 'components/About/LandScreen';
import Capabilities from 'components/About/Capabilities';
import Reviews from 'components/About/Reviews';
import ThisSite from 'components/About/ThisSite';

import { getAboutPageText, getWorksPageText } from 'selectors/translate';
import { getImages } from 'selectors/images';
import { getVideo } from 'selectors/video';

import styles from './style.scss';


@connect(state => ({
  text: getAboutPageText(state),
  cases: getWorksPageText(state),
  images: getImages(state),
  video: getVideo(state)
}))
class AboutContainer extends Component {
  static propTypes = {
    text: PropTypes.object.isRequired,
    cases: PropTypes.object.isRequired,
    images: PropTypes.object.isRequired,
    video: PropTypes.object.isRequired
  };
  static defaultProps = {
    text: {},    
    cases: {},
    images: {},
    video: {}
  };

  constructor() {
    super();
    this.state = {
      width:  window.innerWidth,
      height: window.innerHeight
    }
  }

  /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    if(window.innerWidth < 500) {
      this.setState({ width: 450, height: 102 });
    } else {
      let update_width  = window.innerWidth;
      let update_height = window.innerHeight;
      this.setState({ width: update_width, height: update_height });
    }
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render(){
    const { text, images, cases, video } = this.props;
    const { width, height} = this.state;

    return(
      <section className={styles.aboutContainer}>
        <Animation width={width} height={height} />
        <ScrollSection>
          <ScrollItem>
            <LandScreen />
          </ScrollItem>
          <ScrollItem>
            <Capabilities text={text.capabilities} cases={cases} video={video} />
          </ScrollItem>
        </ScrollSection>
      </section>
    )
  }
}

export default AboutContainer;

// <ScrollItem>
//   <Team text={text.team} images={images}/>
// </ScrollItem>