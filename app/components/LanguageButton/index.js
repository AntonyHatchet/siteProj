import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';

const NavLink = ({ label, onTouchTap }) => (
    <FlatButton label={label} fullWidth={true} onTouchTap={onTouchTap}/>
);

NavLink.propTypes = {
  label: PropTypes.string.isRequired
};

export default NavLink;