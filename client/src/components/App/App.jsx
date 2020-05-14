import React, { useEffect, useState } from 'react';
import { Route, useLocation } from "react-router-dom";
import styled from 'styled-components';
import MainImage from '../MainImage';
import MediaPopup from '../MediaPopup';
import setupMapAPI from '../../helper/map';
// import fetch from 'isomorphic-fetch';
import axios from 'axios';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const initial = { imageURLs: [], tagsProcessed: [] };

const server = 'http://localhost:3001/homes';

const fetchData = function (id) {
  return axios.get(`${server}/${id}/images`)
};

const App = ({ homeInit = initial, pathname = '/' }) => {
  const [home, setHome] = useState(homeInit);
  const resolvedPath = (pathname === '/') ? '' : pathname;
  const location = useLocation();
  const background = location.state && location.state.background;

  useEffect(() => {
    setupMapAPI();
    if (homeInit === initial) {
      console.log('load test data');
      fetchData(1)
      .then(response => response.data)
      .then(home => setHome(home))
      .catch(err => console.error(err));
    }
  }, []);

  return (
    <>
    <ImageContainer>
      <MainImage home={home} pathname={resolvedPath} />
    </ImageContainer>
    {background && <Route path={`${resolvedPath}/:id`} children={<MediaPopup home={home} />} />}
    </>
  )
};

App.fetchData = fetchData;

export default App;