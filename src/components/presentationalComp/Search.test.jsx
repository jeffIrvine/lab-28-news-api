import React from 'react';
import Search from './Search';
import { render, cleanup } from '@testing-library/react';

describe('Search component', () => {
  afterEach(() => cleanup());
  it('renders Search', () => {
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });
});
