// React
import React from 'react';

// Testing
import { shallow } from 'enzyme';

// Import Component
import CurrentRaidList from './index.jsx';

// Test suite
describe('<CurrentRaidList />', () => {
  it('renders without crashing', () => {
    shallow(<CurrentRaidList />);
  });
});
