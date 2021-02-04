import React from 'react';
import ArticleList from './ArticlesList';
import { render, cleanup } from '@testing-library/react';

describe('ArticleList component', () => {
  afterEach(() => cleanup());
  it('renders ArticleList', () => {
    const { asFragment } = render(<ArticleList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
