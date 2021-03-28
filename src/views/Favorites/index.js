import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Material UI
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import Card from '../../shared/Card';
import Header from '../../shared/Header';

const Icon = styled(KeyboardBackspaceIcon)`
  margin-left: 10px;
`;

const Favorites = ({ gifList }) => (
  <>
    <Header title="Giphy - Favorites" />
    <Link to="/">
      <Icon fontSize="large" />
    </Link>
    {gifList.map(gif => (
      <Card
        key={gif.id}
        title={gif.title}
        username={gif.username}
        gifUrl={gif.images?.original?.url}
        altGif={gif.title}
        iconElement={<IconButton onClick={() => console.log('call the action here')}><FavoriteIcon /></IconButton>}
      />
    ))}
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