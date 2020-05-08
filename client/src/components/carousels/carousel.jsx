import React, { useState } from 'react';

import Slide from './slide.jsx';
import { SlideButtonL, SlideButtonR } from '../buttons.jsx';
import CarouselFooter from './carouselFooter.jsx';
import { Div, BorderTop, Flexbox, FlexboxCol, Absolute } from '../styles.jsx';

const Carousel = ({ home, innerWidth }) => {

  const [index, setIndex] = useState(0);

  const { address, price, rooms, imageURLs } = home;
  const left = (index -1 < 0) ? imageURLs.length - 1 : index - 1;
  const right = (index + 1) % imageURLs.length;

  const onClick  = function(left = true) {
    return function(event) {
      event.preventDefault();
      if (left) {
        setIndex((!index) ? imageURLs.length - 1 : index - 1);
      } else {
        setIndex((index + 1) % imageURLs.length);
      }
    };
  };

  return (
    <FlexboxCol className='tall'>
      <div>
        <Absolute top='calc(50% - 12px)' left='20px' right='auto' style={ {zIndex: 1} }>
          <SlideButtonL className='centered' onClick={onClick()}/>
        </Absolute>
        <Absolute top='calc(50% - 12px)' left='auto' right='20px' style={ {zIndex: 1} }>
          <SlideButtonR className='centered' onClick={onClick(false)}/>
        </Absolute>
      </div>
      <Flexbox className='relative tall item' style={{ zIndex: 0, flexBasis: '0%' }}>
          <Slide key={index} shift={'0%'} src={imageURLs[index]} zIndex={2}/>
          <Slide key={right} shift={'100%'} src={imageURLs[right]} zIndex={1}/>
          <Slide key={left} shift={'-100%'} src={imageURLs[left]} zIndex={1}/>
      </Flexbox>
      <BorderTop color='rgb(134, 144, 153)'>
        <CarouselFooter home={home} innerWidth={innerWidth} index={index} />
      </BorderTop>
    </FlexboxCol>
  )
}

export default Carousel;