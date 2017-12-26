// React
import React, { Component } from 'react';

// Styles
import classes from './index.css'

// Components
// import { Container } from '../Layout';
import Header from '../Header';
import CurrentRaidList from '../CurrentRaidList';

// Define component
class App extends Component {
  render () {
    return (
      <div className={classes.App}>
        {/* App header */}
        <Header />

        {/* Current raid list */}
        <CurrentRaidList />
      </div>
    );
  } // /render
} // /Component

export default App;
