import React from 'react';

import { ScheduleRight, ScheduleLeft } from '../buttons.jsx';
import CarouselFixed from './carouselFixed.jsx';
import CalendarDateTile from './calendarDateTile.jsx';

// const getDateInfo = (date) => {
//   return {
//     day: date.get,
//     date,
//     month,
//   }
// };

// const getNext7Days = () => {
//   const = [];
//   let today = Date();

// };

const CalendarDateCarousel = () => (
  <div style={{ padding: '4px', position: 'relative' }}>
    <CarouselFixed top='calc(50% - 16px)' right='-16px' btnRight={<ScheduleRight width='32px' height='32px' />} btnLeft={<ScheduleLeft width='32px' height='32px' />} style={{ marginLeft: '-4px', marginRight: '-4px' }} >
      {Array(7).fill({ day: 'Tue', date: '5', month: 'May' }).map(({ day, date, month }, idx) => {
        return <CalendarDateTile key={idx} day={day} date={date} month={month} />
      })}
    </CarouselFixed>
  </div>
);

export default CalendarDateCarousel;