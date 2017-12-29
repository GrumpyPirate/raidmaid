// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import classes from './index.css';

// Container
const Container = ({ fluid, children }) => {
  const classNames = fluid
    ? `${classes.container} ${classes.containerFluid}`
    : classes.container;

  return (
    <div className={classNames}>{children}</div>
  );
}; // /Container

// PropTypes
Container.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

// Exports
export {
  Container
};
