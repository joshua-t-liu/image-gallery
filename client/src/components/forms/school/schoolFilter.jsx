import React from 'react';
import CarouselFixed from '../../carousels/carouselFixed.jsx';
import { NavButton } from '../../buttons.jsx';


const TypeFilter = ({ types }) => (
  <div style={{ width: '50%' }}>
    <div style={{ position: 'relative', padding: '8px', border: '1px solid rgb(205, 209, 212)', borderRadius: '8px' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1 1 auto'}}>Type</div>
        <div style={{ width: '16px', height: '24px' }}>
          <svg className="svg" viewBox="0 0 32 32">
            <path d="M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z" fill="#869099"></path>
            </svg>
        </div>
      </div>
      <select name='' id='' style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0, width: '100%', height: '100%' }}>
        {types && types.map((type, idx) => <option key={idx} value={type.toLowerCase()}>type</option>)}
      </select>
    </div>
  </div>
);

const LevelFilter = ({ levels }) => (
  <div style={{ display: 'flex', padding: '8px 0 18px 0', margin: '0 -2px 0 -2px' }}>
    <CarouselFixed style={{ flexShrink: 0 }}>
      {levels && levels.map((level, idx) => (
        <NavButton key={idx} title={level} />
      ))}
    </CarouselFixed>
  </div>
);

const SchoolFilter = ({ types, levels }) => (
  <React.Fragment>
    <TypeFilter types={types} />
    <LevelFilter levels={levels} />
  </React.Fragment>
)

export default SchoolFilter;