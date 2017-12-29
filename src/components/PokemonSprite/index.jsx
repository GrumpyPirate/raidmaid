// React
import React from 'react';
import PropTypes from 'prop-types';

// Style
import classes from './index.css';

// Images
import PokemonSprites from './icons';

// Define component
const PokemonSprite = ({ pokemon }) => {
  const formattedPokemonName = pokemon.ename.toLowerCase()
  const sprite = PokemonSprites[formattedPokemonName];

  return (
    <figure className={classes.pokemonSprite}>
      <img
        src={sprite}
        alt={`#${pokemon.id}: ${pokemon.ename}`}
        title={`#${pokemon.id}: ${pokemon.ename}`}
      />
    </figure>
  );
}; // /Component

// PropTypes
PokemonSprite.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
    ]).isRequired,
    ename: PropTypes.string.isRequired,
    type: PropTypes.arrayOf(
      PropTypes.string.isRequired
    ).isRequired
  }).isRequired
};

export default PokemonSprite;
