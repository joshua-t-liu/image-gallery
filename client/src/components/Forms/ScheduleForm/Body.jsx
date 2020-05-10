import React from 'react';
import styled from 'styled-components';
import { ScheduleButton, TourTypeButton } from '../../buttons.jsx';
import Next7DaysCarousel from './Next7DaysCarousel.jsx';
import CheckBox from './CheckBox.jsx';

const Input = styled.input`
border-radius: 8px;
line-height: 1.5;
font-size: 16px;
border-color: rgb(205, 209, 212);
border-width: 1px;
border-style: solid;
width: 100%;
box-sizing: border-box;
padding: 8px;
`;

const FormRow = styled.div`
  display: flex;
  padding: 4px;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding || '8px'};
`;

const ScheduleFormBody = () => (
  <React.Fragment>
    <TourTypeButton />
    <Next7DaysCarousel />
    <FormRow>
      <Input type='text' placeholder='Name' />
      <div style={{ paddingLeft: '8px' }}></div>
      <Input type='text' placeholder='Phone' />
    </FormRow>
    <FormRow>
      <Input type='text' placeholder='Email' />
    </FormRow>
    <CheckBox />
    <FormRow padding='4px 0 0 0' margin='0 0 8px 0'>
      <ScheduleButton width='100%' padding='8px 16px' />
    </FormRow>
  </React.Fragment>
);

export default ScheduleFormBody;