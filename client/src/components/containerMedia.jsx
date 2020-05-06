import React from 'react';
import styled from 'styled-components';

import Carousel from './carousel.jsx';
import ScheduleTour from './scheduleTour.jsx';
import { Schedule } from './buttons.jsx';
import { StyledDiv as Div, BorderTop, FlexContainer, FlexContainerCol, Absolute } from './styles.jsx';

const ContainerMedia = ({ home, innerWidth }) => (
  <FlexContainerCol className='item'>
    <FlexContainer className='item' backgroundColor='rgb(0, 0, 0)'>

      <BorderTop className='relative item' color='rgb(59, 65, 68)'>
        <Carousel home={home} innerWidth={innerWidth}/>
      </BorderTop>

      {(innerWidth > 898) ? (
        <Div className='relative item' flex='0 0 342px'>
          <Absolute right='8px' top='8px' bottom='16px' style={{ width: '332px', borderRadius: '8px', backgroundColor: 'rgb(255,255,255)', height: 'calc(100% -96px)', overflowY: 'auto' }}>
            <ScheduleTour />
            </Absolute>
        </Div>
      ) : (
        <Absolute right='4px' bottom='6px'>
          <Schedule width={'300px'} padding={'4 0'} />
        </Absolute>
      )}

    </FlexContainer>
  </FlexContainerCol>
)

export default ContainerMedia;