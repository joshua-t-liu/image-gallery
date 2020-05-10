import React from 'react';
import styled from 'styled-components';

import { ScheduleRight, ScheduleLeft } from '../../buttons.jsx';
import CarouselFixed from '../../CarouselFixed';
import DateTile from './DateTile.jsx';
import { getNext7Days } from './helper.js';

const Next7Days = styled.div`
  padding: 4px;
  position: relative;
`;

export default () => {
  const btnRight = <ScheduleRight width='32px' height='32px' />;
  const btnLeft = <ScheduleLeft width='32px' height='32px' />;
  const dates = getNext7Days().map(({ day, date, month }, idx) => <DateTile key={idx} day={day} date={date} month={month} />)
  return (
    <Next7Days>
      <CarouselFixed top='calc(50% - 16px)' right='-16px' btnRight={btnRight} btnLeft={btnLeft} style={{ marginLeft: '-4px', marginRight: '-4px' }} >
        {dates}
      </CarouselFixed>
    </Next7Days>
  );
}