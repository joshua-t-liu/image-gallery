import React from 'react';

const Tag = ({tag}) => (
  <span style={{ backgroundColor: 'rgb(255, 255, 255)', display: 'inline-block', borderRadius: '4px', marginRight: '4px', padding: '2px 4px', lineHeight: 1.33, fontSize: '12px', color: 'rgb(0, 178, 91)', fontWeight: 'bold' }}>
    {tag}
  </span>
)

export default Tag;