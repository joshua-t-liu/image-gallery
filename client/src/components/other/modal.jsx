import React, { createRef } from 'react';
import { useHistory } from 'react-router-dom';

import { StyledModal } from '../styles.jsx';
import { ModalContainer } from '../stylesNew.jsx';

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
    <ModalContainer ref={ref} onClick={onClick} onTransitionEnd={onTransistionEnd} >
      {children}
    </ModalContainer>
  )
}

export default Modal;
