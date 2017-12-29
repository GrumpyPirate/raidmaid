// React
import React from 'react';

// Testing
import { shallow } from 'enzyme';
import { getPokemonById } from '../../utils';

// Import component
import PokemonSprite from './';

// Test suite
describe('<PokemonSprite />', () => {
  it('renders without crashing', () => {
    const pokemon = getPokemonById(1);

    shallow(<PokemonSprite pokemon={pokemon} />);
  });
});
