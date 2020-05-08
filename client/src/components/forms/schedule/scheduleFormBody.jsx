import React from 'react';

import { ScheduleButton, TourTypeButton } from '../../buttons.jsx';
import CalendarDateCarousel from '../../carousels/calendarDateCarousel.jsx';
import { Input } from '../../styles.jsx';

const CheckBox = () => (
  <div style={{ padding: '4px 0 8px', display: 'flex', alignItems: 'center' }}>
    <div>
      <input type="checkbox" style={{ opacity: 0, position: 'absolute', width: '20px', height: '20px', zIndex: 1 }}/>
        <svg width="20" height="20" viewBox="0 0 24 24" style={{ width: '20px', height: '20px' }}>
          <g>
          {/* <rect data-cb-part="blur" stroke-width="2" width="18" height="18" x="3" y="3" rx="4"></rect> */}
          <rect data-cb-part="background" strokeWidth="2" width="18" height="18" x="3" y="3" rx="4" fill='none' stroke='rgb(205, 209, 212)'></rect>
          {/* <path data-cb-part="check" fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13l2.5 2L15 9">
          </path> */}
          </g>
        </svg>
    </div>
    <div style={{ margin: '0 0 0 4px' }}>
      <span style={{ color: 'rgb(134, 144, 153)', fontSize: '12px' }}>I want to talk about financing</span>
    </div>
  </div>
);

const ScheduleFormBody = () => (
  <React.Fragment>
    <TourTypeButton />
    <CalendarDateCarousel />
    <div style={{ display: 'flex', padding: '4px' }}>
      <div>
        <Input type='text' placeholder='Name'/>
      </div>
      <div style={{ paddingLeft: '8px' }}>
      <Input type='text' placeholder='Phone'/>
      </div>
    </div>
    <div style={{ padding: '4px' }}>
      <Input type='text' placeholder='Email'/>
    </div>
    <CheckBox />
    <div style={{ width:'100%', padding: '4px 0 0 0', margin:'0 0 8px 0' }}>
      <ScheduleButton width='100%' padding='8px 16px' />
    </div>
  </React.Fragment>
);

export default ScheduleFormBody;