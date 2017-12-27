// React
import React from 'react';
import PropTypes from 'prop-types';

// Vendor
import moment from 'moment';

// Style
import classes from './index.css';

// Components
import { PillButton } from '../Button';
import PokemonSprite from '../PokemonSprite';

// Define component
const Raid = ({ id, pokemonId, hatchesAt, meetupAt, locationId }) => {
  const formattedHatchTime = moment.unix(hatchesAt).format('HH:mm');
  const formattedMeetupTime = moment.unix(meetupAt).format('HH:mm');

  return (
    <li className={classes.raid} tabIndex="0">
      {/* Pokemon Icon */}
      <div className={classes.raidIcon}>
        <PokemonSprite pokemon="groudon" />
      </div>

      {/* Raid Location */}
      <div className={classes.raidLocation}>
        <div className={classes.raidColumn}>
          <span className={classes.raidColumnSubtitle}>Location</span>
          <h3 className={`${classes.raidColumnTitle} ${classes.raidLocationTitle}`}>Quaker Meeting House</h3>
        </div>
      </div>

      {/* Raid Start time */}
      <div className={classes.raidStartTime}>
        <div className={classes.raidColumn}>
          <span className={classes.raidColumnSubtitle}>Hatches</span>
          <h4 className={`${classes.raidColumnTitle} ${classes.raidStartTimeText}`}>{formattedHatchTime}</h4>
        </div>
      </div>

      {/* Raid Meetup time */}
      <div className={classes.raidMeetupTime}>
        <div className={classes.raidColumn}>
          <span className={classes.raidColumnSubtitle}>Meet</span>
          <h4 className={`${classes.raidColumnTitle} ${classes.raidMeetupTimeText}`}>{formattedMeetupTime}</h4>
        </div>
      </div>

      {/* Join Raid button */}
      <div className={classes.joinRaid}>
        <div className={classes.raidColumn}>
          <PillButton dark>Join</PillButton>
        </div>
      </div>
    </li>
  );
}; // /Component

// PropTypes
Raid.propTypes = {
  id: PropTypes.number.isRequired,
  pokemonId: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  hatchesAt: PropTypes.number.isRequired,
  meetupAt: PropTypes.number,
  locationId: PropTypes.number.isRequired
};

export default Raid;
