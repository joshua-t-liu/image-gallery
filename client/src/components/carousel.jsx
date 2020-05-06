import React, { useState } from 'react';

import Slide from './slide.jsx';
import { SlideButton } from './buttons.jsx';
import { StyledDiv as Div, BorderTop, FlexContainer, FlexContainerCol } from './styles.jsx';

const Carousel = ({ home, innerWidth }) => {

  const [index, setIndex] = useState(0);

  const { address, price, rooms, imageURLs } = home;
  const left = (index -1 < 0) ? imageURLs.length - 1 : index - 1;
  const right = (index + 1) % imageURLs.length;
  const pipe = <span style={{ margin: '0px 8px' }}>|</span>
  const offset = (innerWidth < 898) ? { marginRight: '308px' } : {};

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
    <FlexContainerCol className='tall'>
      <div>
        <SlideButton top={'calc(50% - 12px)'} left={'20px'} right={'auto'} onClick={onClick()}/>
        <SlideButton top={'calc(50% - 12px)'} left={'auto'} right={'20px'} onClick={onClick(false)}/>
      </div>
      <FlexContainer className='relative tall item' style={{ zIndex: 0, flexBasis: '0%' }}>
          <Slide key={index} shift={'0%'} src={imageURLs[index]} zIndex={2}/>
          <Slide key={right} shift={'100%'} src={imageURLs[right]} zIndex={1}/>
          <Slide key={left} shift={'-100%'} src={imageURLs[left]} zIndex={1}/>
      </FlexContainer>
      <BorderTop color='rgb(134, 144, 153)'>
        <FlexContainer className='centered white small-font'>
          <div style={{ padding: '16px' }}>
            <span>{`${index + 1}/${imageURLs.length}`}</span>
          </div>
          <Div className='item' style={Object.assign({ textAlign: 'center', padding: '8px 0px' }, offset)}>
            <span>{address}</span>
            <span>{pipe}{price}</span>
            <span>{pipe}{rooms}</span>
          </Div>
        </FlexContainer>
      </BorderTop>
    </FlexContainerCol>
  )
}

export default Carousel;