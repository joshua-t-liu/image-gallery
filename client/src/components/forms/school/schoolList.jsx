import React from 'react';

import { Dot, Divider } from '../../other/auxilliary.jsx';

const SchoolList = ({ schools, collapsed }) => (
  <div style={{ overflowY: 'scroll', padding: '0 8px' }}>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {schools.map(({ school, rating, address, grades, size, distance }, idx) => (
        <React.Fragment>
          <li key={idx} style={{ margin: '-16px -8px 0 -8px' }}>
            <div style={{ display: 'flex'}}>
              <div style={{ flex: '0 0 auto', borderWidth: '16px 8px 0px 8px', borderStyle: 'solid', borderColor: 'transparent', boxSizing: 'border-box' }}>
                <div style={{ minWidth: '64px', minHeight: '64px', backgroundColor: 'rgb(59, 65, 68)', borderRadius: '200px', padding: '16px 12px 0 12px', boxSizing: 'border-box', justifyCenter: 'center' }}>
                  <span style={{ fontSize: '28px', color: 'rgb(255, 255, 255)', fontWeight: 'bold' }}>{rating}</span>
                  <span style={{ fontSize: '14px', color: 'rgb(255, 255, 255)', lineHeight: 1.1 }}>/10</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', borderWidth: '16px 8px 0px 8px', borderStyle: 'solid', borderColor: 'transparent', boxSizing: 'border-box' }}>
                <div style={{ color: 'rgb(0, 120, 130)', fontWeight: 'bold', fontSize: '16px', lineHeight: 1.5 }}>{school}</div>
                <div style={{ fontWeight: 'bold', fontSize: '12px', lineHeight: 1.33 }}>{address}</div>
                <div style={{ color: 'rgb(134, 144, 153)', fontSize: '12px', lineHeight: 1.33 }}>
                  {grades}<Dot/>{size} Students<Dot/>{distance}
                </div>
              </div>
            </div>

            <Divider />
          </li>
        </React.Fragment>
      ))}
    </ul>
  </div>
);

export default SchoolList;