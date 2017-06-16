import React, {Component} from 'react';

import styles from './style.scss';

export default class Grid extends Component{

  render(){

    return(
        <div>
            <div className={styles.gridContainer}>
                {[...Array(10)].map((x, i) =>
                    <div className={styles.horizontalBlock} key={i}/>
                )}
            </div>
            <div className={styles.gridContainer}>
                {[...Array(8)].map((x, i) =>
                    <div className={styles.verticalBlock} key={i}/>
                )}
            </div>
        </div>
    )
  }
}

