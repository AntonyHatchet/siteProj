import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import LandScreen from 'components/About/LandScreen';

import { getContentText } from 'selectors/translate';
import { getImages } from 'selectors/images';
import { getVideo } from 'selectors/video';

import styles from './style.scss';
import Grid from 'components/Grid';

@connect(state => ({
  text: getContentText(state),
  images: getImages(state),
  video: getVideo(state)
}))
class AboutContainer extends Component {
  static propTypes = {
    text: PropTypes.object.isRequired,
    images: PropTypes.object.isRequired,
    video: PropTypes.object.isRequired
  };
  static defaultProps = {
    text: {},
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
    const { text, images, video } = this.props;
    const { width, height} = this.state;

    return(
      <section className={styles.aboutContainer}>
        <Grid vertical={true} horizontal={true}/>
        <LandScreen text={text} video={video} images={images}/>
      </section>
    )
  }
}


//<Animation width={width} height={height} />
export default AboutContainer;