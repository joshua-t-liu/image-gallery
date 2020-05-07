import React from 'react';
import MarkerClusterer from '@google/markerclustererplus';
// import setupMapAPI from '../helper/map.js';

import { StyledDiv as Div } from './styles.jsx';
// import locations from '../helper/testData.js';

class Map extends React.Component {

  // async setupAPI() {
  //   await new Promise(setupMapAPI);
  // }

  componentDidMount() {
    // if (!google) {
    //   this.setupAPI();
    // }

    const { TOP_LEFT, LEFT_BOTTOM } = google.maps.ControlPosition;
    const position = {lat: -28.024, lng: 140.887};
    const map = new google.maps.Map(document.getElementById('map'), {
      center: position,
      zoom: 8,
      fullscreenControlOptions: { position: TOP_LEFT },
      streetViewControl: false,
      zoomControlOptions: { position: LEFT_BOTTOM },
    });

    const marker = new google.maps.Marker({ position, map }); //{ position, map, label }
    // const markers = locations.map((loc, idx) => (new google.maps.Marker({ position: loc, label: String(idx) })));
    // const markerCluster = new MarkerClusterer(map, markers, { imagePath: '/homes/m' });
  }

  render() {
    return (
      <Div className='tall' id='map'></Div>
    )
  }
}

export default Map;