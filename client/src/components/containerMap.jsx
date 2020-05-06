import React from 'react';

import Map from './map.jsx';
import ScheduleTour from './scheduleTour.jsx';
import { StyledDiv as Div, Absolute } from './styles.jsx';

const ContainerMap = () => (
  <Div className='relative item'>
    <Map />
    <Absolute right='8px' top='8px' bottom='16px' style={{ width: '332px', borderRadius: '8px', backgroundColor: 'rgb(255,255,255)', height: 'calc(100% -96px)', overflowY: 'auto' }}>
      <ScheduleTour />
    </Absolute>
  </Div>
);

export default ContainerMap;