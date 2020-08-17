import React, { useEffect, useState, lazy, Suspense, useRef } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

import Modal from '../Modal';
import Head from './Head';

const Photos = lazy(() => import('../Media/Photos'));
const Map = lazy(() => import('../Media/Map'));
const StreetView = lazy(() => import('../Media/StreetView'));
const Schools = lazy(() => import('../Media/Schools'));
const Commute = lazy(() => import('../Media/Commute'));

const position = {lat: 37.869260, lng: -122.254811};

const MediaContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  font-family: arial;
  @media (min-width: 767px) {
    margin: 48px;
    height: calc(100% - 96px);
    width: calc(100% - 96px);
    border-radius: 8px;
  }
`;

const Body = styled.div`
  height: ${({ height }) => height};
  flex: 1 1 auto;
`;

export default ({ home }) => {
  const ref = useRef();
  const { path } = useRouteMatch();
  const [innerWidth, setWidth] = useState(null);

  const routes = [
    {
      title: 'Photos',
      path: path.replace(':id', 'photos'),
      main: <Suspense fallback={<div />} children={<Photos home={home} innerWidth={innerWidth} />} />,
    },
    // {
    //   title: 'Map',
    //   path: path.replace(':id', 'mapView'),
    //   main: <Suspense fallback={<div />} children={<Map innerWidth={innerWidth} position={position} />} />,
    // },
    {
      title: 'Street View',
      path: path.replace(':id', 'streetView'),
      main: <Suspense fallback={<div />} children={<StreetView innerWidth={innerWidth} position={position} />} />,
    },
    {
      title: 'Schools',
      path: path.replace(':id', 'schools'),
      main: <Suspense fallback={<div />} children={<Schools position={position} />} />,
    },
    // {
    //   title: 'Crime',
    //   path: path.replace(':id', 'crime'),
    //   main: <div></div>,
    // },
    {
      title: 'Commute',
      path: path.replace(':id', 'commute'),
      main: <Commute position={position} />,
      main: <Suspense fallback={<div />} children={<Commute position={position} />} />,
    },
    // {
    //   title: 'Shop & Eat',
    //   path: path.replace(':id', 'ammenities'),
    //   main: <div></div>,
    // },
  ];

  useEffect(() => {
    setWidth(window.innerWidth);
    const resize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <Modal>
      <MediaContainer>
        <Head ref={ref} routes={routes} />
        <Body height={(ref.current) ? `calc(100% - ${ref.current.offsetHeigh}px)` : '100%'}>
          <Switch>
            {routes.map(({ path, main }, idx) => <Route key={idx} path={path} children={main} />)}
          </Switch>
        </Body>
      </MediaContainer>
    </Modal>
  )
};