import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import Header from './';


beforeAll(() => {});
beforeEach(() => cleanup());
afterEach(() => {})

describe('Header component', () => {
  test('Should render the component', () => {
    render(<Header />)
  });

  test('should render the title passed by props', () => {
    render(<Header title="Test title" />);
    expect(screen.getByText(/Test title/).textContent).toBe('Test title');
  });
});