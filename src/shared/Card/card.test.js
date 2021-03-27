import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import CardComp from './';


beforeAll(() => {});
beforeEach(() => cleanup());
afterEach(() => {})

describe('Card component', () => {
  test('Should render the component', () => {
    render(<CardComp />)
  });

  test('should render the title passed by props', () => {
    render(<CardComp title="Test title" />);
    expect(screen.getByText(/Test title/).textContent).toBe('Test title');
  });

  test('should render the username passed by props', () => {
    render(<CardComp title="User test" />);
    expect(screen.getByText(/User test/).textContent).toBe('User test');
  });

  test('should render an img tag with an alt passed by props', () => {
    render(<CardComp altGif="Gif alt test" />);
    expect(screen.getByAltText(/Gif alt test/)).toBeDefined();
  });

  test('should render an img tag with the src passed by props', () => {
    render(<CardComp altGif="Gif alt test" gifUrl="gifUrl" />);
    const image = screen.getByAltText(/Gif alt test/);
    expect(image.src).toContain('gifUrl');
  });
});