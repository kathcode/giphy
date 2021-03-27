import React, { useState, useEffect } from 'react';

// Views
import SearchView from '../../views/Search'

// Services
import * as GifService from '../../services/giphy';

const SearchContainer = () => {
  const [trendingGifs, setTrendingGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTrendingGifs();
  }, [])

  const getTrendingGifs = async () => {
    setIsLoading(true);
    const response = await GifService.getTrendingGif();
    if (response.data) {
      setTrendingGifs(response.data);
      setIsLoading(false);
    }
  }

  return (
    <div>
      {trendingGifs.length > 0 && (
        <SearchView gifList={trendingGifs} isLoading={isLoading} />
      )}
    </div>
  )
};

export default SearchContainer;