import React, { createRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  height: ${({ height }) => `${height}px` || '100vh'};
  width: 100vw;
  backdrop-filter: blur(20px);
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  z-index: 1000;
  transition: opacity 0.5s;
`;

export default ({ children }) => {
  const [height, setHeight] = useState(window.innerHeight);
  const history = useHistory();
  const ref = createRef();

  const onTransistionEnd = (event) => {
    if (event.target === ref.current) {
      event.stopPropagation();
      history.goBack();
    }
  }

  const onClick = (event) => {
    if (event.target === ref.current) {
      event.target.style.opacity = 0;
    }
  }

  useEffect(() => {
    window.addEventListener('resize', () => setHeight(window.innerHeight));
  }, []);

  return (
    <Modal height={height} ref={ref} onClick={onClick} onTransitionEnd={onTransistionEnd} >
      {children}
    </Modal>
  )
};
