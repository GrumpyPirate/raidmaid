// React
import React from 'react';

// Testing
import { shallow } from 'enzyme';
import { getPokemonById } from '../../utils';

// Import component
import Raid from './';

const testProps = {
  id: 1,
  pokemon: getPokemonById(1),
  hatchesAt: 1,
  locationId: 1
};

// Test suite
describe('<Raid />', () => {
  it('renders without crashing', () => {
    shallow(<Raid {...testProps} />);
  });
});
