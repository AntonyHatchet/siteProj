import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getMenuText } from 'selectors/translate';
import { actions } from 'modules/translate';

import NavLink from 'components/NavLink';
import LanguageButton from 'components/LanguageButton';

import Logo from './Logo';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {teal800} from 'material-ui/styles/colors';

import styles from './style.scss';

const style = {
  marginRight: 20,
  marginTop: 20,
};

@connect(state => 
  ({
    text: getMenuText(state)
  }),
  {
    languageRu: actions.languageRu,
    languageEn: actions.languageEn
  }
)
export default class Header extends Component {
  static propTypes = {
    text: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {open: false, lang: true};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});
  changeLang = () => {
    if(this.state.lang)
      this.props.languageEn();
    else
      this.props.languageRu();

    this.setState({lang: !this.state.lang});
  }

  render() {
    const { text } = this.props;

    return (
      <div className={styles.headerContainer}>
        <FloatingActionButton backgroundColor={teal800} style={style} onTouchTap={this.handleToggle}>
          <MenuIcon />
        </FloatingActionButton>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <NavLink to="/about" label={text.about} styles={styles} onTouchTap={this.handleClose} />
          <NavLink to="/works" label={text.works} styles={styles} onTouchTap={this.handleClose} />
          <NavLink to="/contacts" label={text.contacts} styles={styles} onTouchTap={this.handleClose} />
          <LanguageButton label={"Lang"} onTouchTap={this.changeLang} />
        </Drawer>
      </div>
    );
  }
}