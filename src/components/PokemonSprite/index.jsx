// React
import React from 'react';
import PropTypes from 'prop-types';

// Style
import classes from './index.css';

// Images
import PokemonSprites from './icons';

// Components
// import { PillButton } from '../Button';

// Define component
const PokemonSprite = ({ pokemon }) => {
  return (
    <figure className={classes.pokemonSprite}>
      <img src={PokemonSprites.groudon} alt="" />
    </figure>
  );
}; // /Component

// PropTypes
PokemonSprite.propTypes = {
  pokemon: PropTypes.string.isRequired
};

export default PokemonSprite;
