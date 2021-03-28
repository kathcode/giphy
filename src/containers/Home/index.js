import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// Views
import HomeView from '../../views/Home'

// Services
import * as GifService from '../../services/giphy';

const HomeContainer = () => {
  const [trendingGifs, setTrendingGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const favoriteGifs = useSelector(state => state.favorite.gifList);

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

  const handleRandomSearch = async (term) => {
    setIsLoading(true);
    const response = await GifService.getRandomGif(term);
    if (response.data) {
      setTrendingGifs([response.data]);
      setIsLoading(false);
    }
  }

  return (
    <HomeView
      gifList={trendingGifs}
      isLoading={isLoading}
      onSearch={handleSearch}
      onRandomSearch={handleRandomSearch}
      onClear={getTrendingGifs}
      favoriteGifs={favoriteGifs}
    />
  )
};

export default HomeContainer;