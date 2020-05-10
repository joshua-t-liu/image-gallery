import React, { useState, forwardRef } from 'react';
import styled from 'styled-components';

import Header from './Header.jsx';
import Filters from './Filters.jsx';
import List from './List.jsx';
import { FlexboxCol } from '../../styles.jsx';

const SchoolForm = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  wide: 100%;
  padding: 8px;
  border: 1px solid rgb(232, 233, 234);
  border-radius: 8px;
  box-sizing: border-box;
`;

const Disclosure = styled.div`
  padding-bottom: 8px;
  font-size: 12px;
  line-height: 1.33;
  color: rgb(134, 144, 153);
`;

const levels = ['Elementary', 'Middle', 'High', 'All Grades'];
const types = ['Assigned', 'Public', 'Private', 'All'];
const disclosure = 'Check with the applicable school district prior to making a decision based on these schools.';

export default ({ schools, collapsed, onClick }) => (
  <SchoolForm>
    <Header onClick={onClick} />
    <Filters types={types} levels={levels} />
    <Disclosure>{disclosure}</Disclosure>
    {!collapsed && <List schools={schools} />}
  </SchoolForm>
);