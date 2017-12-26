// React
import React from 'react';

// Testing
import { shallow } from 'enzyme';

// Component
import Header from './';

// Test suite
describe('<Header />', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  })
});
