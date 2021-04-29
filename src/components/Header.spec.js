import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header.js';

describe('header', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const tree = renderer.create(<Header />).toJSON();

    expect(tree.children[0]).toBe('Starter');
  });
});
