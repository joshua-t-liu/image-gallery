import React from 'react';

import Carousel from '../carousels/carousel.jsx';
import ResponsiveScheduleForm from './ResponsiveScheduleForm.jsx';
import { Div, BorderTop, Flexbox, FlexboxCol, Absolute } from '../styles.jsx';

const ContainerMedia = ({ home, innerWidth }) => (
  <FlexboxCol className='tall'>
    <Flexbox className='item' style={{backgroundColor: 'rgb(0, 0, 0)' }}>
      <BorderTop className='relative item' color='rgb(59, 65, 68)'>
        <Carousel home={home} innerWidth={innerWidth}/>
      </BorderTop>
      {(innerWidth > 898) ? (
        <Div className='relative item' flex='0 0 342px'>
          <ResponsiveScheduleForm innerWidth={innerWidth}/>
        </Div>
      ): (
        <ResponsiveScheduleForm innerWidth={innerWidth}/>
      )}
    </Flexbox>
  </FlexboxCol>
)

export default ContainerMedia;