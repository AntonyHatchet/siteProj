import React from 'react';

import styles from './style.scss';

export default class ScrollItem extends React.Component {

  render(){

    return(
      <div className={styles.sectionContainer}>
        {this.props.children}
      </div>
    )

  }
}
