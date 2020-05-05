import React from 'react';

const Slide = ({shift, src, zIndex}) => (
  <div style={{ transform: `translateX(${shift})`, position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, zIndex: zIndex }}>
    <picture style={{ height: '100%' }}>
      {/* source have srcset and media */}
      <source></source>
      <img src={src} style={{ height: '100%', width: '100%', objectFit: 'contain' }}/>
    </picture>
  </div>
)

export default Slide;