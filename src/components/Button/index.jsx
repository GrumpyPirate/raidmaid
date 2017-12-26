// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import classes from './index.css';

// PillButton
function PillButton ({ dark = false, children }) {
  const className = dark
    ? `${classes.pillButtonDark}`
    : `${classes.pillButton}`;

  return (
    <button type="button" className={className}>
      <span className={classes.pillButtonText}>{children}</span>
    </button>
  );
} // /PillButton

// PropTypes
PillButton.propTypes = {
  dark: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}

// Exports
export {
  PillButton
};
