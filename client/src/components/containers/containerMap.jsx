import React from 'react';

import Map from '../maps/map.jsx';
import ResponsiveScheduleForm from './ResponsiveScheduleForm.jsx';
import { FlexboxCol, Absolute } from '../styles.jsx';

const ContainerMap = ({ position, innerWidth }) => (
  <FlexboxCol className='relative tall'>
    <Map position={position} />
    <ResponsiveScheduleForm innerWidth={innerWidth} />
  </FlexboxCol>
);

export default ContainerMap;