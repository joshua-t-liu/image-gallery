import React, { useState } from 'react';
import styled from 'styled-components';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';

const Footer = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid rgb(134, 144, 153);
  font-size: 14px;
  color: rgb(255, 255, 255);
  line-height: 1.43;
`;

const Count = styled.div`
  padding: 16px;
`;

const Summary = styled.div`
  flex: 1 1 auto;
  text-align: center;
  padding: 8px 0px;
  margin-right: ${({ offset }) => offset};
  @media (max-width: ${SMALL_WIDTH}) {
    margin-right: auto;
  }
`;

const Pipe = () => (
  <span style={{ margin: '0px 8px' }}>|</span>
);

export default ({ home, index, innerWidth }) => {

  const { address, price, rooms, imageURLs } = home;
  // const pipe = <span style={{ margin: '0px 8px' }}>|</span>
  const offset = (innerWidth < 898) ? '308px' : '';

  return (
    <Footer>
      <Count>
        <span>{`${index + 1}/${imageURLs.length}`}</span>
      </Count>
      <Summary offset={offset}>
        <span>{address}</span>
        <span><Pipe />{price}</span>
        <span><Pipe />{rooms}</span>
      </Summary>
    </Footer>
  )
};