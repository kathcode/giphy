import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// State
import { useDispatch } from 'react-redux';
import { removeFromFavorites } from '../../store/slices/favoriteSlice'; 

// Material UI
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

import { Container, Icon, NoItemsMessage } from './styled';

import Card from '../../shared/Card';
import Header from '../../shared/Header';

const Favorites = ({ gifList }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Header title="Giphy - Favorites" />
      <Link to="/">
        <Icon fontSize="large" />
      </Link>
      {gifList.length === 0 && <NoItemsMessage>You don't have favorite gifs</NoItemsMessage>}
      <Container>
        {gifList.map((gif, index) => (
          <Card
            key={gif.id}
            title={gif.title}
            username={gif.username}
            gifUrl={gif.images?.original?.url}
            altGif={gif.title}
            iconElement={
              <IconButton
                onClick={() => dispatch(removeFromFavorites(index))}
              >
                <DeleteIcon />
              </IconButton>}
          />
        ))}
      </Container>  
    </>
  )
};

Favorites.propTypes = {
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
}

export default Favorites