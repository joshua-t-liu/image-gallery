import React from 'react';
import styled from 'styled-components';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';

const ScheduleForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-top: 24px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: rgb(59, 65, 68);
  line-height: 1.2;
  margin-bottom: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  overflow: visible;
`;

const header = 'Schedule A Tour';

export default () => (
  <ScheduleForm>
    <Title>{header}</Title>
    <Form onSubmit={() => {}}>
      <Header />
      <Body />
      <Footer />
    </Form>
  </ScheduleForm>
);