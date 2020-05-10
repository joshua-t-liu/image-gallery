import React, { useState } from 'react';
import styled from 'styled-components';
import MapEmbed from './MapEmbed.jsx';
import SchoolForm from '../Forms/SchoolForm';
import { Div, Absolute } from '../styles.jsx';
import schools from '../Forms/SchoolForm/dummyData.js';

const MediaSchool = styled.div`
  position: relative;
  height: 100%;
`;

const Sidebar = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  bottom: 16px;
  height: 'calc(100% -96px)';
  width: 332px;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  overflow-y: auto;
  z-index: 100;
  border: 1px solid rgb(232, 233, 234);
  &.collapsed {
    top: auto;
  }
`;

export default ({ position }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <MediaSchool>
      <MapEmbed position={position} />
      <Sidebar className={collapsed ? 'collapsed' : ''}>
        <SchoolForm schools={schools} collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}/>
      </Sidebar>
    </MediaSchool>
  );
}