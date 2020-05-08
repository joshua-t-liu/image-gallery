import React, { useEffect } from 'react';
import MarkerClusterer from '@google/markerclustererplus';

import { Div } from '../styles.jsx';
// import locations from '../helper/testData.js';

const Map = ({ position }) => {
  const ref = React.createRef();

  useEffect(() => {
    if (typeof google !== 'undefined') {

      const { TOP_LEFT, LEFT_BOTTOM } = google.maps.ControlPosition;

      const map = new google.maps.Map(ref.current, {
        center: position,
        zoom: 8,
        fullscreenControlOptions: { position: TOP_LEFT },
        streetViewControl: false,
        zoomControlOptions: { position: LEFT_BOTTOM },
      });

      const marker = new google.maps.Marker({ position, map });
    }
    // const markers = locations.map((loc, idx) => (new google.maps.Marker({ position: loc, label: String(idx) })));
    // const markerCluster = new MarkerClusterer(map, markers, { imagePath: '/homes/m' });
  }, []);

  return <Div className='tall' ref={ref} />;
};

export default Map;