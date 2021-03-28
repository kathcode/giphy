import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';


import HomeView from '.';

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

describe('Home view component', () => {
  const initialState = {
    favorite: [],
  };
  const mockStore = configureStore();
  let store,wrapper;

  test('Should render the component', () => {
    const history = createMemoryHistory();
    store = mockStore(initialState);
    render(<Provider store={store}>
      <Router history={history}>
        <HomeView gifList={[]} />
      </Router>
    </Provider>);
  });

  test('should render the title when loading is false and gifList has items', () => {
    const history = createMemoryHistory();
    store = mockStore(initialState);
    render(<Provider store={store}>
      <Router history={history}>
        <HomeView gifList={[mockGif]} isLoading={false} />
      </Router>
    </Provider>);
    expect(screen.getByText(/Title/i).textContent).toBe('Title')
  });

  test('should render the loading when isLoading flag is true', () => {
    const history = createMemoryHistory();
    store = mockStore(initialState);
    render(<Provider store={store}>
      <Router history={history}>
        <HomeView gifList={[mockGif]} isLoading={true} />
      </Router>
    </Provider>);
    expect(screen.getByRole('progressbar').textContent).toBeDefined();
  });
});