import React from 'react';
import PropTypes from 'prop-types';

const SearchView = ({ gifList, isLoading }) => {
  return (
    <>
      {isLoading && <p>Is loading</p>}
      {!isLoading && gifList.map(gif => (
        <div key={gif.id}>{gif.title}</div>
      ))}
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
      downsized_still: PropTypes.shape({
        url: PropTypes.string
      })
    })
  })),
  isLoading: PropTypes.bool
}

export default SearchView;