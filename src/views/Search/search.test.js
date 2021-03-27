import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import SearchView from './';

const mockGif = {
  id: '1abc',
  embed_url: 'url',
  username: 'User',
  title: 'Title',
  images: {
    downsized_still: {
      url: 'url'
    }
  }
};

beforeAll(() => {});
beforeEach(() => cleanup());
afterEach(() => {})

describe('Search view component', () => {
  test('Should render the component', () => {
    render(<SearchView gifList={[]} />)
  });

  test('should render the title when loading is false and gifList has items', () => {
    render(<SearchView gifList={[mockGif]} isLoading={false} />);
    expect(screen.getByText(/Title/i).textContent).toBe('Title')
  });

  test('should render the loading when isLoading flag is true', () => {
    render(<SearchView gifList={[mockGif]} isLoading={true} />);
    expect(screen.getByText(/Is loading/i).textContent).toBe('Is loading')
  });
});