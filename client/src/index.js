import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import setupMapAPI from './helper/map.js';

const imageGallery = document.createElement('div');
imageGallery.id = 'root-trulia-image-gallery';
document.body.append(imageGallery);

setupMapAPI();

ReactDOM.render(<App />, document.getElementById('root-trulia-image-gallery'));