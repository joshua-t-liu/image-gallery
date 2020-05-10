import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Body from './Body.jsx';
import SlideButton from './SlideButton.jsx';

const Carousel = styled.div`
  position: relative;
  width: 100%;
  overflow: visible;
`;

const Position = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  left: ${({ left }) => left};
  z-index: 1;
`;

export default ({ children, btnLeft, btnRight, top = '7px', right = '0px'}) => {
  const [selected, setSelected] = useState(0);
  const [clipped, setClipped] = useState(false);
  const [shift, setShift] = useState(0);
  const [max, setMax] = useState(0);
  const ref = useRef(null);

  const resize = (event) => {
    const { childNodes, style, scrollWidth, clientWidth } = ref.current;
    const size = Array.from(childNodes).reduce((size, child) => size + child.offsetWidth, 0);
    style.transform = 'translateX(0)';
    setClipped((scrollWidth - clientWidth) > 0);
    setMax(100 * (size / clientWidth - 1));
    setShift(0);
  };

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
    return () => window.removeEventListener('resize', resize);
  }, []);

  const onShift = (dir = 1) => {
    const range = (val) => (Math.max(0, Math.min(val, max)));
    return function (event) {
      setShift(range(shift + dir * 100));
      ref.current.style.transform = `translateX(-${range(shift + dir * 100)}%)`;
    }
  }

  return (
    <Carousel>
      {(clipped && shift < max)  &&
      <Position top={top} right={right}>
        <SlideButton btn={btnRight} onClick={onShift()}/>
      </Position>}

      {(clipped && shift > 0)  &&
      <Position top={top} left={right}>
        <SlideButton btn={btnLeft} left={true} onClick={onShift(-1)}/>
      </Position>}

      <Body children={children} ref={ref} onClick={(event) => setSelected(parseInt(event.currentTarget.id))} selected={selected} />
    </Carousel>
  )
};