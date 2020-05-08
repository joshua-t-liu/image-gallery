import React, { useState } from 'react';

import { Div, Flexbox } from '../styles.jsx';

const CarouselFooter = ({ home, index, innerWidth }) => {

  const { address, price, rooms, imageURLs } = home;
  const pipe = <span style={{ margin: '0px 8px' }}>|</span>
  const offset = (innerWidth < 898) ? { marginRight: '308px' } : {};

  return (
    <Flexbox className='centered white small-font'>
      <div style={{ padding: '16px' }}>
        <span>{`${index + 1}/${imageURLs.length}`}</span>
      </div>
      <Div className='item' style={Object.assign({ textAlign: 'center', padding: '8px 0px' }, offset)}>
        <span>{address}</span>
        <span>{pipe}{price}</span>
        <span>{pipe}{rooms}</span>
      </Div>
    </Flexbox>
  )
}

export default CarouselFooter;