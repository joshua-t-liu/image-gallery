import React from 'react';
import { Route, useLocation, useRouteMatch } from "react-router-dom";

import ImageTile from './imageTile.jsx';
import ContainerRouter from '../containers/containerRouter.jsx';
import { Flexbox } from '../styles.jsx';

const ImageGallery = ({ home }) => {
  const location = useLocation();
  const { url } = useRouteMatch();
  const background = location.state && location.state.background;

  return (
    <div>
      <Flexbox style={{ justifyContent: 'center'}}>
        <ImageTile home={home}/>
      </Flexbox>
      {background && <Route path={`${url}/:id`} children={<ContainerRouter home={home} />} />}
    </div>
  )
}

export default ImageGallery;