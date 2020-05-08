import React, { useState, forwardRef } from 'react';

import SchoolHeader from './schoolHeader.jsx';
import SchoolFilter from './schoolFilter.jsx';
import SchoolList from './schoolList.jsx';

const levels = ['Elementary', 'Middle', 'High', 'All Grades'];
const types = ['Assigned', 'Public', 'Private', 'All'];
const disclosure = 'Check with the applicable school district prior to making a decision based on these schools.';

const SchoolForm = ({ schools, collapsed, onClick }) => (
  <div style={{ height: '100%', width: '100%', padding: '8px', border: '1px solid rgb(232, 233, 234)', borderRadius: '8px', boxSizing: 'border-box' }}>

    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <SchoolHeader onClick={onClick} />

      <SchoolFilter types={types} levels={levels} />

      <div style={{ paddingBottom: '8px' }}>
        <div style={{ fontSize: '12px', lineHeight: 1.33, color: 'rgb(134, 144, 153)' }}>
          {disclosure}
        </div>
      </div>

      {!collapsed && <SchoolList schools={schools} />}
    </div>

  </div>
);

export default SchoolForm;