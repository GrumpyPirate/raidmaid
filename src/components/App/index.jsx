// React
import React, { Component } from 'react';

// React router
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

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
      <Router>
        <Route exact path="/" component={() => (
          <div className={classes.App}>
            {/* App header */}
            <Header />

            {/* Current raid list */}
            <CurrentRaidList />
          </div>
        )}/>
      </Router>
    );
  } // /render
} // /Component

export default App;
