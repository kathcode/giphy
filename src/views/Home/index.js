import React from 'react';
import PropTypes from 'prop-types';

// State
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../../store/slices/favoriteSlice'; 

// Material UI
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Chip from '@material-ui/core/Chip';

import Card from '../../shared/Card';
import Header from '../../shared/Header';
import SearchBar from '../../shared/SearchBar';

import { Container, PaginationC, ChipsContainer } from './styled';

const HomeView = ({
  gifList,
  isLoading,
  onSearch,
  onRandomSearch,
  onClear,
  favoriteGifs,
  onPageChange,
  totalGifsCount,
  currentPage,
  translateToBlue
}) => {
  const dispatch = useDispatch();
  const isFavorite = (gifId) => favoriteGifs.some(gif => gif.id === gifId);

  return (
    <>
      <Header title="Giphy - List" />
      <SearchBar onSearch={onSearch} onRandomSearch={onRandomSearch} onClear={onClear} />
      <ChipsContainer>
        <Chip label="Translate to blue" color="secondary" onClick={() => translateToBlue('blue')} />
        <Chip label="Translate to black" color="secondary" onClick={() => translateToBlue('black')} />
        <Chip label="Translate to beauty" color="secondary" onClick={() => translateToBlue('beauty')} />
      </ChipsContainer>
      <Container>
        {isLoading && <CircularProgress />}
        {!isLoading && gifList.map(gif => (
          <Card
            key={gif.id}
            title={gif.title}
            username={gif.username}
            gifUrl={gif.images?.original?.url}
            altGif={gif.title}
            iconColor={isFavorite(gif.id) ? '#ffbc91' : '#fff7da'}
            iconElement={
              <IconButton
                onClick={() => (!isFavorite(gif.id) && dispatch(addToFavorites(gif)))}
              >
                <FavoriteIcon />
              </IconButton>}
          />
        ))}
      </Container>
      {!isLoading &&
        <PaginationC
          count={totalGifsCount}
          color="primary"
          boundaryCount={2}
          onChange={((ev, page) => onPageChange(page))}
          page={currentPage}
        />
      }
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
  onPageChange: PropTypes.func,
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
  })),
  totalGifsCount: PropTypes.number,
  currentPage: PropTypes.number
}

HomeView.defaultProps = {
  favoriteGifs: [],
  onSearch: () => {},
  onRandomSearch: () => {},
  onClear: () => {},
  onPageChange: () => {},
}

export default HomeView;