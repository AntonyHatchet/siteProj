import React, { Component, PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import {teal800} from 'material-ui/styles/colors';

import { Sectionheader, PlainText } from 'components/Texts';
import VerticalPopIn from 'components/VerticalPopIn';

import styles from './style.scss';

const style = {
    fontSize: "1.5em"
};

export default class InfoBlock extends Component {
    constructor(props) {
      super(props);

      this.state = {
        popIn: false,
      };
    }

    tooglePopIn = () => {
      this.setState({popIn: !this.state.popIn})
    }

    openInNewTab = () => {
        var win = window.open(this.props.projectInfo.link, '_blank');
        win.focus();
    }

    render(){
        const {
            projectInfo
        } = this.props;

        const {
            popIn
        } = this.state;

        return(
            <div className={styles.infoBlock} >
                <PlainText text={projectInfo.comment} />
                <div className={styles.buttonWrapper} >
                    <RaisedButton backgroundColor={teal800} labelStyle={style} labelColor="#ffffff" label={projectInfo.buttonTitle} onTouchTap={(projectInfo.blank)? this.openInNewTab : this.tooglePopIn}/>
                </div>
                <VerticalPopIn open={popIn} onRequestClose={this.tooglePopIn}>
                    <iframe className={styles.frame} src={projectInfo.link} width={window.innerWidth} height={window.innerHeight} />
                </VerticalPopIn>
            </div>
        )
    }
}
