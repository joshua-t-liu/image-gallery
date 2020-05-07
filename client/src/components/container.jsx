import React, { useEffect, useState } from 'react';

import { Switch, Route, useRouteMatch, useLocation } from 'react-router-dom';

import Modal from './modal.jsx';
import ContainerHeader from './containerHeader.jsx';
import ContainerMedia from './containerMedia.jsx';
import ContainerMap from './containerMap.jsx';
import { FlexContainerCol } from './styles.jsx';


const Container = ({ home }) => {
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
      main: <ContainerMap />,
    },
    {
      title: 'Street View',
      path: path.replace(':id', 'streetView'),
      main: <div></div>,
    },
    {
      title: 'Schools',
      path: path.replace(':id', 'schools'),
      main: <div></div>,
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

  const style = { backgroundColor: 'rgb(255, 255, 255)' };

  if (innerWidth > 767) Object.assign(style, { margin: '48px', height: 'calc(100% - 96px)', width: 'calc(100% - 96px)', borderRadius: '8px' });

  const location= useLocation();
  return (
    <Modal>
      <FlexContainerCol className='tall wide relative' style={style}>
        <ContainerHeader routes={routes} />
        <Switch>
          {routes.map(({ path, main }, idx) => <Route key={idx} path={path} children={main} />)}
        </Switch>
      </FlexContainerCol>
    </Modal>
  )
}

export default Container;