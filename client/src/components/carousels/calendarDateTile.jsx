import React from 'react';

const CalendarDateTile = ({ day, date, month }) => (
  <div style={{ borderSize: '8px 4px 0px', width: '25%', borderStyle: 'solid', borderColor: 'transparent', boxSizing: 'border-box', flexShrink: 0 }}>
    <button style={{ borderRadius: '8px', backgroundColor: 'rgb(255, 255, 255)', padding: '8px', borderWidth: '1px', borderColor: 'rgb(205, 209, 212)', width: '100%', borderStyle: 'solid', lineHeight: 1.4, fontSize: '14px', fontFamily: 'arial', cursor: 'pointer' }}>
      <div>{day}</div>
      <div style={{ fontWeight: 'bold', lineHeight: 1.2, fontSize: '20px' }}>{date}</div>
      <div>{month}</div>
    </button>
  </div>
);

export default CalendarDateTile;