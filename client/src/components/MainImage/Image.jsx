import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  &:hover {
    transform: scale(1.04);
`;

const Image = ({ imageURL }) => (
  <picture>
    <source></source>
    <StyledImage src={imageURL} />
  </picture>
);

export default Image;