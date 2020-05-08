import React from 'react';

const Collapse = ({ onClick }) => (
  <div style={{ width: '20px', height: '20px', cursor: 'pointer' }} onClick={onClick}>
    <svg className="svg" viewBox="0 0 32 32">
      <path d="M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z" fill="#869099"></path>
    </svg>
  </div>
);

const header = 'Schools';

const SchoolHedaer = ({ onClick }) => (
  <div style={{ display: 'flex' }}>
    <h3 style={{ margin: ' 0 8px 8px 0', width: '100%', flex: '1 1 0px' }}>{header}</h3>
    {onClick && <Collapse onClick={onClick} />}
  </div>
)

export default SchoolHedaer;