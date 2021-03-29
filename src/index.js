import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import store from './store/store';
import { Provider } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


import './index.css';

import HomeContainer from './containers/Home';
import FavoritesContainer from './containers/Favorites';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffbc91',
    },
    secondary: {
      main: '#fff7da',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeContainer />
          </Route>
          <Route exact path="/favorites">
            <FavoritesContainer />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
