import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app.jsx';
import setupMapAPI from './helper/map.js';

const imageGallery = document.createElement('div');
imageGallery.id = 'root';
document.body.append(imageGallery);

setupMapAPI();

ReactDOM.render(<App />, document.getElementById('root'));