import React, {Component} from 'react';

import styles from './style.scss';

export default class Grid extends Component{

  render(){
    const {
        vertical,
        horizontal
    } = this.props;

    return(
        <div>
            {(vertical)?
                <div className={styles.gridContainer}>
                    {[...Array(8)].map((x, i) =>
                        <div className={styles.verticalBlock} key={i}/>
                    )}
                </div>
                :
                null
            }
            {(horizontal)?
                <div className={styles.gridContainer}>
                    {[...Array(10)].map((x, i) =>
                        <div className={styles.horizontalBlock} key={i}/>
                    )}
                </div>
                :
                null
            }
        </div>
    )
  }
}

