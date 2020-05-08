import React, { useState } from 'react';

import Map from '../maps/map.jsx';
import SchoolForm from '../forms/school/schoolForm.jsx';
import { Div, Absolute } from '../styles.jsx';
import schools from '../forms/school/dummyData.js';

const ContainerSchools = ({ position }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Div className='relative tall'>
      <Map position={position} />
      <Absolute className={collapsed ? 'collapsed' : ''} right='8px' top='8px' bottom='16px' style={{ width: '332px', borderRadius: '8px', backgroundColor: 'rgb(255,255,255)', height: 'calc(100% -96px)', overflowY: 'auto', zIndex: 100, overflow: 'hidden', border: '1px solid rgb(232, 233, 234)' }}>
        <SchoolForm schools={schools} collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}/>
      </Absolute>
    </Div>
  );
}

export default ContainerSchools;