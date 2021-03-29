import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './slices/favoriteSlice';
import homeSearchReducer from './slices/homeSearchSlice';

export default configureStore({
  reducer: {
    favorite: favoriteReducer,
    trending: homeSearchReducer
  }
});
