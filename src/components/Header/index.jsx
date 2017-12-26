// React
import React, { Component } from 'react';

// Style
import classes from './index.css';

// Components
// import { Container } from '../Layout';

// Define component
class Header extends Component {
  render () {
    return (
      <header className={classes.appHeader}>
        <h2 className={classes.appHeader__title}>
          RaidMaid
        </h2>
      </header>
    );
  } // /render ()
} // /Component

export default Header;
