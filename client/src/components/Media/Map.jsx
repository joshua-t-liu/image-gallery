import React from 'react';
import styled from 'styled-components';
import MapEmbed from './MapEmbed.jsx';
import ResponsiveScheduleForm from './ResponsiveScheduleForm.jsx';

const MediaMap = styled.div`
  position: relative;
  height: 100%;
`;

export default ({ position, innerWidth }) => (
  <MediaMap>
    <MapEmbed position={position} />
    <ResponsiveScheduleForm innerWidth={innerWidth} />
  </MediaMap>
);