import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { Div, Absolute, Flexbox } from '../styles.jsx';
import { CarouselButtonL, CarouselButtonR, } from '../buttons.jsx';

const CarouselFixed = ({ children, btnLeft, btnRight, top = '7px', right = '0px'}) => {
  const [selected, setSelected] = useState(0);
  const [clipped, setClipped] = useState(false);
  const [shift, setShift] = useState(0);
  const [max, setMax] = useState(0);
  const ref = useRef(null);

  const resize = (event) => {
    const { childNodes, style, scrollWidth, clientWidth } = ref.current;
    const size = Array.from(childNodes).reduce((size, child) => size + child.scrollWidth, 0);
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
    <Div className='relative'>
      {(clipped && shift < max)  &&
      <Absolute top={top} right={right} style={{ zIndex: 1 }}>
        {btnRight
          ? React.cloneElement(btnRight, { onClick: onShift() })
          : <CarouselButtonR onClick={onShift()} />
        }
      </Absolute>}

      {(clipped && shift > 0)  &&
      <Absolute top={top} left={right} style={{ zIndex: 1 }}>
        {btnLeft
          ? React.cloneElement(btnLeft, { onClick: onShift(-1) })
          : <CarouselButtonL onClick={onShift(-1)} dir={-1} />
        }
      </Absolute>}

      <Flexbox ref={ref} style={{ overflow: 'visible' }}>
        {React.Children.map(children, (child, idx) => {
          return React.cloneElement(child, {
            id: idx,
            className: 'item',
            style: Object.assign({}, child.props.style, { flexShrink: 0 }),
            onClick: (event) => setSelected(parseInt(event.currentTarget.id)),
            selected: selected === idx,
          });
        })}
      </Flexbox>
    </Div>
  )
};

export default CarouselFixed;