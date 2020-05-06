import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory, useLocation } from 'react-router-dom';

import { StyledModal } from './styles.jsx';

const Modal = ({ children }) => {
  const history = useHistory();
  const { state } = useLocation();

  const onTransistionEnd = (event) => {
    event.stopPropagation();
    history.replace(state.background.pathname);
  }

  const onClick = (event) => {
    if(event.target.id === 'modal'){
      event.target.style.opacity = 0;
      setTimeout(() => onTransistionEnd(event), 500);
      // why does google map cause a transtion???
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
