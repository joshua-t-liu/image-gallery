import React from 'react';

import ScheduleFormHeader from './scheduleFormHeader.jsx';
import ScheduleFormBody from './ScheduleFormBody.jsx';
import ScheduleFormFooter from './scheduleFormFooter.jsx';

const header = 'Schedule A Tour';

const ScheduleForm = () => (
  <div style={{ display: 'flex', flexDirection: 'column', padding: '16px', marginTop: '24px' }}>
    <div style={{ fontWeight: 'bold', fontSize: '20px', color: 'rgb(59, 65, 68)', lineHeight: 1.2, marginBottom: '8px' }}>
      {header}
    </div>
      <form onSubmit={() => {}}>
        <div>
          <ScheduleFormHeader />
          <ScheduleFormBody />
          <ScheduleFormFooter />
        </div>
      </form>
    <div>
    </div>
  </div>
);

export default ScheduleForm;