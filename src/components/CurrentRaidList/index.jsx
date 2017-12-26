// React
import React, { Component } from 'react';

// Style
import classes from './index.css';

// Components
import { Container } from '../Layout';
import Raid from '../Raid';

// Services
import RaidService from '../../services/raidService';

// Define component
class CurrentRaidList extends Component {
  constructor () {
    super();

    this.raidService = new RaidService();

    // State
    this.state = {
      isLoading: false,
      raids: []
    }
  } // /constructor

  // Lifecycle
  componentWillMount () {
    this.setState({ isLoading: true });

    this.raidService.getRaids()
      .then(raids => {
        this.setState({
          raids,
          isLoading: false
        });
      });
  } // /componentWillMount

  render () {
    let classNames = classes.currentRaids;
    if (this.state.isLoading) {
      classNames = `${classNames} ${classes.currentRaidsLoading}`;
    }

    return (
      <div className={classNames}>
        <h2 className={classes.currentRaidsTitle}>
          <Container>Current Raids</Container>
        </h2>

        <ul className={classes.currentRaidsList}>
          {this.state.raids.length
            ? (
              this.state.raids.map(raid => <Raid {...raid} key={raid.id} />)
            )
            : <p>No raids.</p>
          }
        </ul>
      </div>
    );
  } // /render
} // /Component

export default CurrentRaidList;
