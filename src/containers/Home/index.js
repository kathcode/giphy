import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// State
import { useDispatch } from 'react-redux';
import { updateSearchTerm } from '../../store/slices/homeSearchSlice'; 

// Views
import HomeView from '../../views/Home'

// Services
import * as GifService from '../../services/giphy';

const HomeContainer = () => {
  const [trendingGifs, setTrendingGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalGifsCount, setTotalGifsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const favoriteGifs = useSelector(state => state.favorite.gifList);
  const searchTerm = useSelector(state => state.trending.searchTerm)
  const dispatch = useDispatch();

  useEffect(() => {
    getTrendingGifs();
  }, [])

  const getTrendingGifs = async (page) => {
    setIsLoading(true);
    const response = await GifService.getTrendingGif(page);
    if (response.data) {
      setTrendingGifs(response.data);
      setTotalGifsCount(response.pagination.total_count)
      setIsLoading(false);
    }
  }

  const handleSearch = async (term) => {
    setIsLoading(true);
    dispatch(updateSearchTerm(term));
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

  const handlePageChange = async (page) => {
    setCurrentPage(page);
    getTrendingGifs(page > 1 ? page * 10 : 1);
  }

  const translateToBlue = async (translate) => {
    setIsLoading(true);
    const response = await GifService.translateGifs(translate, searchTerm);
    if (response.data) {
      setTrendingGifs([response.data]);
      setIsLoading(false);
    }
  }

  const handleClear = () => {
    dispatch(updateSearchTerm(''));
    getTrendingGifs();
  }

  return (
    <HomeView
      gifList={trendingGifs}
      isLoading={isLoading}
      onSearch={handleSearch}
      onRandomSearch={handleRandomSearch}
      onClear={handleClear}
      favoriteGifs={favoriteGifs}
      onPageChange={handlePageChange}
      totalGifsCount={totalGifsCount}
      currentPage={currentPage}
      translateToBlue={translateToBlue}
    />
  )
};

export default HomeContainer;