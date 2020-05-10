import React from 'react';
import styled from 'styled-components';

const DateTile = styled.div`
  border-size: 8px 4px 0px;
  width: 25%;
  border-style: solid;
  border-color: transparent;
  box-sizing: border-box;
  flex-shrink: 0;
`;

const Date = styled.div`
  font-weight: bold;
  line-height: 1.2;
  font-size: 20px;
`;

const Button = styled.button`
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  padding: 8px;
  border-width: 1px;
  border-color: rgb(205, 209, 212);
  width: 100%;
  border-style: solid;
  line-height: 1.4;
  font-size: 14px;
  font-family: arial;
  cursor: pointer;
`;

export default ({ day, date, month }) => (
  <DateTile>
    <Button>
      <div>{day}</div>
      <Date>{date}</Date>
      <div>{month}</div>
    </Button>
  </DateTile>
);