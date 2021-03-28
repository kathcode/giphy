import React, { useState, useEffect } from 'react';

// Views
import FavoritesView from '../../views/Favorites'

const FavoritesContainer = () => {
  const [favoriteGifs, setFavoriteGifs] = useState([]);

  return (
    <div>
      <FavoritesView gifList={favoriteGifs} />
    </div>
  )
};

export default FavoritesContainer;