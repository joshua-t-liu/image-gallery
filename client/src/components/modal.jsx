import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(20px);
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  z-index: 1000;
  transition: opacity 0.5s;
`;

const Modal = ({ children, hook }) => {
  const onClick = (event) => {
    if(event.target.id === 'modal'){
      event.target.style.opacity = 0;
    }
  }

  const onTransistion = (event) => {
    ReactDOM.render(null, document.getElementById(hook));
  }

  return (
    <StyledDiv id='modal' onClick={onClick} onTransitionEnd={onTransistion}>
      {children}
    </StyledDiv>
  )
}

export default Modal;
