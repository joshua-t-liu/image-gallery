import React from 'react';

import StreetView from '../maps/streetView.jsx';
import ResponsiveScheduleForm from './ResponsiveScheduleForm.jsx';
import { FlexboxCol, Absolute } from '../styles.jsx';

const ContainerStreetView = ({ position, innerWidth }) => (
  <FlexboxCol className='relative tall'>
    <StreetView position={position} />
    <ResponsiveScheduleForm innerWidth={innerWidth} />
  </FlexboxCol>
);

export default ContainerStreetView;