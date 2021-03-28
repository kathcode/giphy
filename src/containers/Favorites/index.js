import React from 'react';
import { useSelector } from 'react-redux';

// Views
import FavoritesView from '../../views/Favorites'

const FavoritesContainer = () => {
  const favoriteGifs = useSelector(state => state.favorite.gifList);

  return (
    <div>
      <FavoritesView gifList={favoriteGifs} />
    </div>
  )
};

export default FavoritesContainer;