// React
import React from 'react';

// Testing
import { shallow } from 'enzyme';

// Import Component
import { PillButton } from './index.jsx';

// Test suite
describe('<PillButton />', () => {
  it('renders without crashing', () => {
    shallow(<PillButton />);
  });
});
