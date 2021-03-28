import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Material UI
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

import { Container, Icon } from './styled';

import Card from '../../shared/Card';
import Header from '../../shared/Header';

const Favorites = ({ gifList }) => (
  <>
    <Header title="Giphy - Favorites" />
    <Link to="/">
      <Icon fontSize="large" />
    </Link>
    <Container>
      {gifList.map(gif => (
        <Card
          key={gif.id}
          title={gif.title}
          username={gif.username}
          gifUrl={gif.images?.original?.url}
          altGif={gif.title}
          iconElement={<IconButton onClick={() => console.log('call the action here')}><DeleteIcon /></IconButton>}
        />
      ))}
    </Container>  
  </>
);

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