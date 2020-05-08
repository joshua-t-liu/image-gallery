import React, { createRef } from 'react';
import { useHistory } from 'react-router-dom';

import { StyledModal } from '../styles.jsx';

const Modal = ({ children }) => {
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

  return (
    <StyledModal ref={ref} onClick={onClick} onTransitionEnd={onTransistionEnd} >
      {children}
    </StyledModal>
  )
}

export default Modal;
