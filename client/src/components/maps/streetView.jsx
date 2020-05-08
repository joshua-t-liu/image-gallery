import React, { useEffect } from 'react';
// import setupMapAPI from '../helper/map.js';

import { Div } from '../styles.jsx';

const StreetView = ({ position }) => {
  const ref = React.createRef();

  useEffect(() => {
    if (typeof google !== 'undefined') {

      const { LEFT_BOTTOM } = google.maps.ControlPosition;

      const streetView = new google.maps.StreetViewPanorama(ref.current, {
        position: position,
        pov: {heading: 165, pitch: 0},
        zoom: 1,
        zoomControlOptions: { position: LEFT_BOTTOM },
      });
    }
  }, []);

  return <Div className='tall' ref={ref} />;
};

export default StreetView;