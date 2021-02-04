import React from 'react';
import Article from './ArticlesList';
import { render, cleanup } from '@testing-library/react';

describe('Article component', () => {
  afterEach(() => cleanup());
  it('renders Article', () => {
    const { asFragment } = render(<Article />);
    expect(asFragment()).toMatchSnapshot();
  });
});
