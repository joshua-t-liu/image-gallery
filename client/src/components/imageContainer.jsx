import React from 'react';
import styled from 'styled-components';

import Carousel from './carousel.jsx';
import ScheduleTour from './scheduleTour.jsx';
import { Schedule } from './buttons.jsx';

const StyledDiv = styled.div`
  overflow: hidden;
  &.relative {
    position: relative;
  }
  &.absolute {
    position: absolute;
  }
  &.item {
    flex: ${({ flex }) => flex || '1 1 auto'};
  }
  background-color: ${({ backgroundColor }) => backgroundColor || ''};
  top: ${({ top }) => top || ''};
  bottom: ${({ bottom }) => bottom || ''};
  left: ${({ left }) => left || ''};
  right: ${({ right }) => right || ''};
`;

const BorderTop = styled(StyledDiv)`
  border-top: 1px solid rgb(59, 65, 68);
`;

const FlexContainer = styled(StyledDiv)`
  display: flex;
`;

const FlexContainerCol = styled(FlexContainer)`
  flex-direction: column;
`;

const ImageContainer = ({ home, innerWidth }) => (
  <FlexContainerCol className='item'>
    <FlexContainer className='item' backgroundColor='rgb(0,0,0)'>

      <BorderTop className='relative item'>
        <Carousel home={home} innerWidth={innerWidth}/>
      </BorderTop>

      {(innerWidth > 898) ? (
        <StyledDiv className='relative item' flex='0 0 342px'>
          <div style={{ position: 'absolute', right: '8px', top: '8px', bottom: '16px', width: '332px', borderRadius: '8px', backgroundColor: 'rgb(255,255,255)', height: 'calc(100% -96px)', overflowY: 'auto' }} >
            <ScheduleTour />
          </div>
        </StyledDiv>
      ) : (
        // <div style={{ position: 'absolute', right: '4px', bottom: '6px' }}>
        <StyledDiv className='absolute' right='4px' bottom='6px'>
          <Schedule width={'300px'} padding={'4 0'} />
        </StyledDiv>
      )}

    </FlexContainer>
  </FlexContainerCol>
)

export default ImageContainer;