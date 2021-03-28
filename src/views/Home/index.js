import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';

import Card from '../../shared/Card';
import Header from '../../shared/Header';
import SearchBar from '../../shared/SearchBar';

import { Container } from './styled';

const HomeView = ({ gifList, isLoading, onSearch, onClear }) => {
  return (
    <>
      <Header title="Giphy - List" />
      <SearchBar onSearch={onSearch} onClear={onClear} />
      <Container>
        {isLoading && <p>Is loading</p>}
        {!isLoading && gifList.map(gif => (
          <Card
            key={gif.id}
            title={gif.title}
            username={gif.username}
            gifUrl={gif.images?.original?.url}
            altGif={gif.title}
            iconElement={<IconButton onClick={() => console.log('call the action here')}><FavoriteIcon /></IconButton>}
          />
        ))}
      </Container>
    </>
  )
}

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
  onClear: PropTypes.func
}

export default HomeView;