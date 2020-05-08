import React, { useEffect, useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Modal from '../other/modal.jsx';
import ContainerHeader from './containerHeader.jsx';
import ContainerMedia from './containerMedia.jsx';
import ContainerMap from './containerMap.jsx';
import ContainerStreetView from './containerStreetView.jsx';
import ContainerSchools from './containerSchools.jsx';
import { FlexboxCol, Div } from '../styles.jsx';

const position = {lat: 37.869260, lng: -122.254811};

const ContainerRouter = ({ home }) => {

  const [innerWidth, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  });

  const { path } = useRouteMatch();

  const routes = [
    {
      title: 'Photos',
      path: path.replace(':id', 'photos'),
      main: <ContainerMedia home={home} innerWidth={innerWidth} />,
    },
    {
      title: 'Map',
      path: path.replace(':id', 'mapView'),
      main: <ContainerMap innerWidth={innerWidth} position={position} />,
    },
    {
      title: 'Street View',
      path: path.replace(':id', 'streetView'),
      main: <ContainerStreetView innerWidth={innerWidth} position={position} />,
    },
    {
      title: 'Schools',
      path: path.replace(':id', 'schools'),
      main: <ContainerSchools position={position} />,
    },
    {
      title: 'Crime',
      path: path.replace(':id', 'crime'),
      main: <div></div>,
    },
    {
      title: 'Commute',
      path: path.replace(':id', 'commute'),
      main: <div></div>,
    },
    {
      title: 'Shop & Eat',
      path: path.replace(':id', 'ammenities'),
      main: <div></div>,
    },
  ];

  return (
    <Modal>
      <FlexboxCol className='tall wide relative container' style={{ backgroundColor: 'white' }}>
        <ContainerHeader routes={routes} />
        <Div className='item'>
          <Switch>
            {routes.map(({ path, main }, idx) => <Route key={idx} path={path} children={main} />)}
          </Switch>
        </Div>
      </FlexboxCol>
    </Modal>
  )
}

export default ContainerRouter;