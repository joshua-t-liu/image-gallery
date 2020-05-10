import React from 'react';
import { Route, useLocation, useRouteMatch } from "react-router-dom";
import styled from 'styled-components';

import MainImage from '../MainImage';
import Popup from '../Popup';
import { Flexbox } from '../styles.jsx';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default ({ home }) => {
  const location = useLocation();
  const { url } = useRouteMatch();
  const background = location.state && location.state.background;

  return (
    <div>
      <ImageContainer>
        <MainImage home={home}/>
      </ImageContainer>
      {background && <Route path={`${url}/:id`} children={<Popup home={home} />} />}
    </div>
  )
};