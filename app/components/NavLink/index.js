import React, { PropTypes } from 'react';
import { Route, Link } from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';
import {teal800, grey900, deepOrange500} from 'material-ui/styles/colors';

const NavLink = ({ to, label, styles, onTouchTap }) => (
  <Route
    to={to}
    exact
    children={({ location: { pathname } }) => (
      <Link to={to}>
        <FlatButton label={label} labelStyle={ {color: (pathname.indexOf(to) !== -1)? teal800 : grey900 }} rippleColor={deepOrange500} fullWidth={true} onTouchTap={onTouchTap}/>
      </Link>
    )}
  />
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavLink;
