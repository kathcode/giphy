import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  button {
    padding: 15px;
    margin-left: 10px;
  }
`;

const Input = styled(TextField)`
  width: 50%;
`;

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  return (
    <Container>
      <Input
        placeholder="Gif name"
        variant="outlined"
        onChange={(ev) => setTerm(ev.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button
        onClick={(ev) => onSearch(term)}
        variant="outlined"
        size="medium">
        Search for GIF
      </Button>
    </Container>
  )
};

SearchBar.propTypes = {
  onSearch: PropTypes.func,
}

SearchBar.defaultProps = {
  onSearch: () => {},
}

export default SearchBar;