import React from 'react';
import PropTypes from 'prop-types';

// State
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../../store/slices/favoriteSlice'; 

// Material UI
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import Card from '../../shared/Card';
import Header from '../../shared/Header';
import SearchBar from '../../shared/SearchBar';

import { Container } from './styled';

const HomeView = ({ gifList, isLoading, onSearch, onRandomSearch, onClear, favoriteGifs }) => {
  const dispatch = useDispatch();
  const isFavorite = (gifId) => favoriteGifs.some(gif => gif.id === gifId);

  return (
    <>
      <Header title="Giphy - List" />
      <SearchBar onSearch={onSearch} onRandomSearch={onRandomSearch} onClear={onClear} />
      <Container>
        {isLoading && <CircularProgress />}
        {!isLoading && gifList.map(gif => (
          <Card
            key={gif.id}
            title={gif.title}
            username={gif.username}
            gifUrl={gif.images?.original?.url}
            altGif={gif.title}
            iconColor={isFavorite(gif.id) ? 'blue' : 'gray'}
            iconElement={
              <IconButton
                onClick={() => (!isFavorite(gif.id) && dispatch(addToFavorites(gif)))}
              >
                <FavoriteIcon />
              </IconButton>}
          />
        ))}
      </Container>
    </>
  )
};

HomeView.propTypes = {
  gifList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    embed_url: PropTypes.string,
    username: PropTypes.string,
    title: PropTypes.string,
    images: PropTypes.shape({
      original: PropTypes.shape({
        url: PropTypes.string
      }),
    })
  })),
  isLoading: PropTypes.bool,
  onSearch: PropTypes.func,
  onRandomSearch: PropTypes.func,
  onClear: PropTypes.func,
  favoriteGifs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    embed_url: PropTypes.string,
    username: PropTypes.string,
    title: PropTypes.string,
    images: PropTypes.shape({
      original: PropTypes.shape({
        url: PropTypes.string
      }),
    })
  }))
}

export default HomeView;