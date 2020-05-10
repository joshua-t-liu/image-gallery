import React from 'react';
import styled from 'styled-components';
import StreetViewEmbed from './StreetViewEmbed.jsx';
import ResponsiveScheduleForm from './ResponsiveScheduleForm.jsx';

const MediaStreetView = styled.div`
  position: relative;
  height: 100%;
`;

export default ({ position, innerWidth }) => (
  <MediaStreetView>
    <StreetViewEmbed position={position} />
    <ResponsiveScheduleForm innerWidth={innerWidth} />
  </MediaStreetView>
);