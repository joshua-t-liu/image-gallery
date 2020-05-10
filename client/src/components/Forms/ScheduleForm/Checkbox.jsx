import React from 'react';
import styled from 'styled-components';

const CheckBoxField = styled.div`
  padding: 4px 0 8px;
  display: flex;
  align-items: center;
`;

const CheckBox = styled.input`
  opacity: 0;
  position: absolute;
  width: 20px;
  height: 20px;
  z-index: 1;
`;

const FieldMessage = styled.div`
  margin: 0 0 0 4px;
  color: rgb(134, 144, 153);
  font-size: 12px;
`;

export default () => (
  <CheckBoxField>
    <div>
      <CheckBox type="checkbox" />
      <svg width="20" height="20" viewBox="0 0 24 24" style={{ width: '20px', height: '20px' }}>
        <g>
        {/* <rect data-cb-part="blur" stroke-width="2" width="18" height="18" x="3" y="3" rx="4"></rect> */}
        <rect data-cb-part="background" strokeWidth="2" width="18" height="18" x="3" y="3" rx="4" fill='none' stroke='rgb(205, 209, 212)'></rect>
        {/* <path data-cb-part="check" fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13l2.5 2L15 9">
        </path> */}
        </g>
      </svg>
    </div>
    <FieldMessage>
      <span>I want to talk about financing</span>
    </FieldMessage>
  </CheckBoxField>
);