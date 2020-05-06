import React from 'react';

import { Absolute, StyledMainImage } from './styles.jsx';

const Slide = ({shift, src, zIndex}) => (

  <Absolute left='0' top='0' right='0' bottom='0' style={{ transform: `translateX(${shift})`, zIndex: zIndex }}>
    <picture style={{ height: '100%' }}>
      {/* source have srcset and media */}
      <source></source>
      <StyledMainImage src={src} style={{ objectFit: 'contain', cursor: 'auto' }}/>
    </picture>
  </Absolute>

)

export default Slide;