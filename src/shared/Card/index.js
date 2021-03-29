import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';

const Container = styled(Card)`
  padding-bottom: 10px;
  position: relative;

  img {
    width: 100%;
  }

  div {
    max-height: 40px;
  }
`;

const IconContainer = styled.div`
  position: relative;
  cursor: pointer;

  button {
    position: absolute;
    right: 0px;
    padding: 0px;
    
    svg {
      color: ${props => (props.color || '#999999')};
      font-size: 2.5rem;
    }
  }
`;

const Description = styled.div`
  padding: 10px;
`;

const CardComp = ({ title, gifUrl, altGif, username, iconElement, iconColor }) => (
  <Container>
    <IconContainer color={iconColor}>
      {iconElement}
    </IconContainer>
    <img alt={altGif} src={gifUrl} />
    <Description>
      <div><strong>{title}</strong></div>
      <p>{username}</p>
    </Description>
  </Container>
);

Card.propTypes = {
  title: PropTypes.string,
  username: PropTypes.string,
  gifUrl: PropTypes.string,
  altGif: PropTypes.string
}

export default CardComp;