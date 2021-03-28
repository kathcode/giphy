import React, { useState, useEffect } from 'react';

// Views
import SearchView from '../../views/Home'

// Services
import * as GifService from '../../services/giphy';

const HomeContainer = () => {
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

  const handleSearch = async (term) => {
    setIsLoading(true);
    const response = await GifService.searchGif(term);
    if (response.data) {
      setTrendingGifs(response.data);
      setIsLoading(false);
    }
  }

  return (
    <div>
      {trendingGifs.length > 0 && (
        <SearchView
          gifList={trendingGifs}
          isLoading={isLoading}
          onSearch={handleSearch}
          onClear={getTrendingGifs}
        />
      )}
    </div>
  )
};

export default HomeContainer;