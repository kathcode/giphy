import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Container = styled.header`
  padding: 5px;
  background-color: #ffbc91;
  text-align: center;
  margin-bottom: 40px;
  font-size: 1.5rem;
  font-family: 'Caveat', cursive;

  h1 {
    margin: 10px;
  }
`;


export const Header = ({ title }) => (
  <Container><h1>{title}</h1></Container>
);

Header.propTypes = {
  title: PropTypes.string
}

export default Header;

