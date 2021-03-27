import React from 'react';
import PropTypes from 'prop-types';

import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';

import Card from '../../shared/Card';
import { Container } from './styled';

const SearchView = ({ gifList, isLoading }) => {
  return (
    <>
      {isLoading && <p>Is loading</p>}
      <Container>
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

SearchView.propTypes = {
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
  isLoading: PropTypes.bool
}

export default SearchView;