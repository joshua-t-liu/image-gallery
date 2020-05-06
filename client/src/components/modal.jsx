import React from 'react';
import ReactDOM from 'react-dom';
import { StyledModal } from './styles.jsx';

const Modal = ({ children, hook }) => {

  const onTransistionEnd = (event) => {
    ReactDOM.render(null, document.getElementById(hook));
  }

  const onClick = (event) => {
    if(event.target.id === 'modal'){
      event.target.style.opacity = 0;
      setTimeout(onTransistionEnd, 500);
    }
  }

  return (
    // onTransitionEnd={onTransistionEnd}
    <StyledModal id='modal' onClick={onClick} >
      {children}
    </StyledModal>
  )
}

export default Modal;
