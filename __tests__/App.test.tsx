/**
 * @format
 */

import 'react-native';
// eslint-disable-next-line import/order
import React from 'react';

// Note: import explicitly to use the types shiped with jest.
// eslint-disable-next-line import/order
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import App from '../src/App';

it('renders correctly', () => {
  renderer.create(<App />);
});
