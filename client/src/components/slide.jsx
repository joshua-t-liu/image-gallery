import React from 'react';

import { Absolute, MainImage } from './styles.jsx';

const Slide = ({shift, src, zIndex}) => (

  <Absolute left='0' top='0' right='0' bottom='0' style={{ transform: `translateX(${shift})`, zIndex: zIndex }}>
    <picture style={{ height: '100%' }}>
      {/* source have srcset and media */}
      <source></source>
      <MainImage src={src} style={{ objectFit: 'contain' }}/>
    </picture>
  </Absolute>

)

export default Slide;