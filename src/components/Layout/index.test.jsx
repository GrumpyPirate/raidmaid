// React
import React from 'react';

// Testing
import { shallow } from 'enzyme';

// Import Component
import { Container } from './index.jsx';

// Test suite
describe('<Container />', () => {
  it('renders without crashing', () => {
    shallow(<Container />);
  });
});
