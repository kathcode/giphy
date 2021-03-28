import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import SearchBar from './';


beforeAll(() => {});
beforeEach(() => cleanup());
afterEach(() => {})

describe('SearchBar component', () => {
  test('Should render the component', () => {
    render(<SearchBar />);
  });

  test('should handle the onSearch', () => {
    const handleClick = jest.fn();
    render(<SearchBar onSearch={handleClick} />);
    
    fireEvent.click(screen.getByText(/Search for GIF/));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});