import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
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

const SearchBar = ({ onSearch, onClear }) => {
  const [term, setTerm] = useState('');

  const handleClear = () => {
    setTerm('');
    onClear();
  }

  return (
    <Container>
      <Input
        placeholder="Gif name"
        variant="outlined"
        onChange={(ev) => setTerm(ev.target.value)}
        value={term}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {!term && <SearchIcon />}
              {term && <ClearIcon data-testid="clear" onClick={handleClear} />}
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
      <Link style={{ marginLeft: 10 }} to="/favorites">My saved gifs</Link>
    </Container>
  )
};

SearchBar.propTypes = {
  onSearch: PropTypes.func,
  onClear: PropTypes.func
}

SearchBar.defaultProps = {
  onSearch: () => {},
}

export default SearchBar;