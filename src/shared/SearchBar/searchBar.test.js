import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import SearchBar from './';


beforeAll(() => {});
beforeEach(() => cleanup());
afterEach(() => {})

describe('SearchBar component', () => {
  test('Should render the component', () => {
    const history = createMemoryHistory();
    render(<Router history={history}><SearchBar /></Router>);
  });

  test('should handle the onSearch', () => {
    const handleClick = jest.fn();
    const history = createMemoryHistory();
    render(<Router history={history}><SearchBar onSearch={handleClick} /></Router>);
    
    fireEvent.click(screen.getByText(/Search for GIF/));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});