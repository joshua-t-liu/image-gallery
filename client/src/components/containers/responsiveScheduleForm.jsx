import React, { Fragment } from 'react';

import ScheduleForm from '../forms/schedule/scheduleForm.jsx';
import { ScheduleButton } from '../buttons.jsx';
import { Div, Absolute } from '../styles.jsx';

const ResponsiveScheduleForm = ({ innerWidth }) => {
  if (innerWidth > 898) {
    return (
      <Absolute right='8px' top='8px' bottom='16px' style={{ width: '332px', borderRadius: '8px', backgroundColor: 'rgb(255,255,255)', height: 'calc(100% -96px)', overflowY: 'auto' }}>
        <ScheduleForm />
      </Absolute>
    )
  } else {
    return (
      <Absolute right='4px' bottom='6px'>
        <ScheduleButton width='300px' padding='8px 16' />
      </Absolute>
    )
  }
};

export default ResponsiveScheduleForm;